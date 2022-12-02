const nav = document.querySelector('nav');
const ul = document.createElement('ul');
const liList = [];
const aList = [];

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

for(let i = 0; i<menuItems.length; i++) {
    const li  = document.createElement('li');
    const a = document.createElement('a')
    ul.appendChild(li);
    li.appendChild(a);
    a.setAttribute('href', menuItems[i].url);
    a.innerText = menuItems[i].text;
}
nav.appendChild(ul);




// a.forEach(function(item, i) {
//     item.setAttribute('href', menuItems[i].url);
//     item.innerText = menuItems[i].text;
// })


// aList[0].setAttribute('href', '/home')
// aList[1].setAttribute('href', '/gallery')
// aList[2].setAttribute('href', 'contact')

// aList[0].innerText = 'home'
// aList[1].innerText = 'galeria'
// aList[2].innerText = 'kontakt'