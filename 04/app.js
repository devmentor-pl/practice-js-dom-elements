console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');
const ulElement = document.createElement('ul');
navElement.appendChild(ulElement);

for (let i=0; i<3;i++) {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');

    ulElement.appendChild(liElement);
    liElement.appendChild(aElement);
}

//wykorzystanie struktury menuItems

const aList = document.querySelectorAll('a')
aList.forEach(function(item, index){
    item.setAttribute('href', menuItems[index]['url']);
    item.textContent= menuItems[index]['text'];
})




