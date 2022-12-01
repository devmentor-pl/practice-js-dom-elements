const nav = document.querySelector('nav');
const ul = document.createElement('ul');
const liList = [];
const aList = [];

for(let i = 0; i<3; i++) {
    liList[i] = document.createElement('li');
    aList[i] = document.createElement('a')
    ul.appendChild(liList[i]);
    liList[i].appendChild(aList[i]);
}
nav.appendChild(ul);





// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

aList.forEach(function(item, i) {
    item.setAttribute('href', menuItems[i].url);
    item.innerText = menuItems[i].text;
})


// aList[0].setAttribute('href', '/home')
// aList[1].setAttribute('href', '/gallery')
// aList[2].setAttribute('href', 'contact')

// aList[0].innerText = 'home'
// aList[1].innerText = 'galeria'
// aList[2].innerText = 'kontakt'