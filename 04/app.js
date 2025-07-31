console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navList = document.createElement('ul');

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const listItemLink = document.createElement('a');

    listItemLink.href = item.url;
    listItemLink.textContent = item.text;

    listItem.appendChild(listItemLink);
    navList.appendChild(listItem);
});

const nav = document.querySelector('nav');
nav.appendChild(navList);