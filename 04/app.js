console.log('DOM');

const nav = document.querySelector('nav');
const ulElement = document.createElement('ul');

const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];
menuItems.forEach((item) => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
    aElement.innerText = item.text;
    aElement.href = item.url;
});

nav.appendChild(ulElement);