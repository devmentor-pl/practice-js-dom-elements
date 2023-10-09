console.log('DOM');

/*
const unorderedList = document.createElement('ul');

const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

const link1 = document.createElement('a');
const link2 = document.createElement('a');
const link3 = document.createElement('a');

link1.textContent = 'start';
link2.textContent = 'galeria';
link3.textContent = 'kontakt';

link1.setAttribute('href', '/');
link2.setAttribute('href', '/gallery');
link3.setAttribute('href', '/contact');

listItem1.appendChild(link1);
listItem2.appendChild(link2);
listItem3.appendChild(link3);

unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);
unorderedList.appendChild(listItem3);

const navElement = document.querySelector('nav');
if (navElement) {
    navElement.appendChild(unorderedList);
}

*/

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const unorderedList = document.createElement('ul');

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = item.text;
    link.setAttribute('href', item.href);
    listItem.appendChild(link);
    unorderedList.appendChild(listItem);
});

const navElement = document.querySelector('nav');
if (navElement) {
    navElement.appendChild(unorderedList);
}
