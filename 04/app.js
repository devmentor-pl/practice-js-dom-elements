console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');

const ul = document.createElement('ul');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

nav.appendChild(ul);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

const everyLink = document.querySelectorAll('li > a');

[...everyLink].forEach((item, index) => {
	item.textContent = menuItems[index].text;
	item.setAttribute('href', menuItems[index].url);
});