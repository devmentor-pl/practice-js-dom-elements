/* Metoda 1 bez wykorzystania zadanej struktury

const liAmounts = 3;

const nav = document.querySelector('nav');
if (nav) {
    const list = document.createElement('ul');
    for (let i = 1; i <= liAmounts; i++) {
        const liEl = document.createElement('li');
        const aEl = document.createElement('a');
        if (i === 1) {
            aEl.innerText = 'start';
            aEl.setAttribute('href', '/');
        }
        else if (i === 2) {
            aEl.innerText = 'galeria';
            aEl.setAttribute('href', '/gallery');
        }
        else if (i === 3) {
            aEl.innerText = 'kontakt';
            aEl.setAttribute('href', '/contact');
        }
        liEl.appendChild(aEl);
        list.appendChild(liEl);
    }
    nav.appendChild(list);
} */


// Metoda 2 z wykorzystaniem zadanej struktury

const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');
if (nav) {
    const navList = document.createElement('ul');
    nav.appendChild(navList);
    menuItems.forEach(el => {
        const liEl = document.createElement('li');
        const aEl = document.createElement('a');
        navList.appendChild(liEl);
        liEl.appendChild(aEl);
        aEl.innerText = el.text;
        aEl.setAttribute('href', el.url);
    })
};