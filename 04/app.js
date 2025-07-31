console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];
/* pierwsza metoda */
let nameElement = document.querySelector('nav');
let ulElement = document.createElement('ul')

for (let i = 1; i <= 3; i++) {
    let liElement = document.createElement('li');
    let linkElement = document.createElement('a');
    
    if (i === 1) {
        linkElement.textContent = 'start';
        linkElement.setAttribute('href', '/');
    } else if (i === 2) {
        linkElement.textContent = 'galeria';
        linkElement.setAttribute('href', '/gallery');
    } else {
        linkElement.textContent = 'kontakt';
        linkElement.setAttribute('href', '/contact')
    }
    
    
    liElement.appendChild(linkElement);
    ulElement.appendChild(liElement);
}
nameElement.appendChild(ulElement);

/* druga metoda */

menuItems.forEach(function(menuItem){
    let liElement = document.createElement('li');
    let linkElement = document.createElement('a');

    linkElement.textContent = menuItem.text;
    linkElement.setAttribute('href', menuItem.url);

    liElement.appendChild(linkElement);
    ulElement.appendChild(liElement);
});

nameElement.appendChild(ulElement);



