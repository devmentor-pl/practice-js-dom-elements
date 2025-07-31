console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const uList = document.createElement('ul');
console.log(document);
const navBar = document.querySelector('nav');
navBar.appendChild(uList);

for(menuItem of menuItems) {
    console.log(menuItem);
    const listItem = document.createElement('li');
    uList.appendChild(listItem);
    const listItemLink = document.createElement('a');
    listItem.appendChild(listItemLink);
    listItemLink.setAttribute('href', menuItem['url']);
    listItemLink.textContent = menuItem['text'];
}