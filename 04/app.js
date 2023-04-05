console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const ulElement = document.createElement('ul');
const navElement = document.querySelector('nav');
navElement.appendChild(ulElement);

const liList = [];
const aList = [];
for (let i = 0; i < 3; i++) {
    liList[i] = document.createElement('il');
    aList[i] = document.createElement('a');;
    ulElement.appendChild(liList[i]);
    liList[i].appendChild(aList[i]);
}

aList[0].setAttribute('href', '/');
aList[1].setAttribute('href', '/gallery');
aList[2].setAttribute('href', '/content');

aList[0].textContent = 'home';
aList[1].innerText = 'gallery';
aList[2].innerText = 'content';


