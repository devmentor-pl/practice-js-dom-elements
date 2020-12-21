console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];


/* Piersze rozwiązanie */
/*
const navElement = document.querySelector('nav');

if (navElement) {
    const ulElement = document.createElement('ul');
    navElement.appendChild(ulElement);

    for (let i = 0; i < 3; i++) {

        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);

        const aElement = document.createElement('a');
        liElement.appendChild(aElement);

        if (i === 0) {
            aElement.setAttribute('href', '/');
            aElement.innerText = 'start';
        }
        if (i === 1) {
            aElement.setAttribute('href', '/gallery');
            aElement.innerText = 'galeria';
        }
        if (i === 2) {
            aElement.setAttribute('href', '/contact');
            aElement.innerText = 'kontakt';
        }

    }

}

*/


/* Drugie rozwiązanie */

const navElement = document.querySelector('nav');

if (navElement) {
    const ulElement = document.createElement('ul');
    navElement.appendChild(ulElement);

    for (let i = 0; i < menuItems.length; i++) {

        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);

        const aElement = document.createElement('a');
        liElement.appendChild(aElement);

        aElement.setAttribute('href', menuItems[i].url);
        aElement.innerText = menuItems[i].text;

    }
}