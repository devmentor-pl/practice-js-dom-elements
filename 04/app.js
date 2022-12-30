console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' }
];

const navElement = document.querySelector('nav');
if (navElement) {
    const ulElement = document.createElement('ul');
    navElement.appendChild(ulElement);

    menuItems.forEach(menuItem => {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);

        const aElement = document.createElement('a');
        aElement.setAttribute('href', menuItem.url);
        aElement.innerText = menuItem.text;
        liElement.appendChild(aElement);
    });
}
