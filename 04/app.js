console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const parent = document.querySelector('nav');
console.log(parent);
console.log(menuItems.length);


if (parent) {
    const list = document.createElement('ul');
    console.log(list);
    parent.appendChild(list);
    for (let i = 0; i < menuItems.length; i++) {
        const listItem = document.createElement('li');
        const a = document.createElement('a');
        list.appendChild(listItem);
        listItem.appendChild(a);
        console.log(menuItems[i]);
        a.setAttribute('href', menuItems[i].url);
        a.innerText = menuItems[i].text;
        console.log(a);
    }
}