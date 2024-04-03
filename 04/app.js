console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navbar = document.querySelector('nav')

//Tworzenie li
const liItem1 = document.createElement('li');
const aItem = document.createElement('a');
aItem.setAttribute("href", '/');
aItem.innerText = 'home';
liItem1.appendChild(aItem);

const liItem2 = document.createElement('li');
const aItem2 = document.createElement('a');
aItem2.setAttribute("href", '/gallery');
aItem2.innerText = 'gallery';
liItem2.appendChild(aItem2);

const liItem3 = document.createElement('li');
const aItem3 = document.createElement('a');
aItem3.setAttribute("href", '/contact');
aItem3.innerText = 'contact';
liItem3.appendChild(aItem3);


// Tworzenie ul listy
const ulList = document.createElement('ul')

ulList.appendChild(liItem1)
ulList.appendChild(liItem2)
ulList.appendChild(liItem3)

console.log(ulList);
console.log(navbar);

navbar.appendChild(ulList)
