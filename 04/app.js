console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');

const ul = document.createElement('ul');
nav.appendChild(ul);

menuItems.forEach(() => {
	const li = document.createElement('li');
	ul.appendChild(li);
	const a = document.createElement('a');
	li.appendChild(a);
});

const everyLink = document.querySelectorAll('li > a');

[...everyLink].forEach((item, index) => {
	item.textContent = menuItems[index].text;
	item.setAttribute('href', menuItems[index].url);
});
