console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];
const nav = document.querySelector('nav');
const menu = document.createElement('ul');

const url = menuItems.map(({ url }) => url);
const text = menuItems.map(({ text }) => text);

for (let i = 0; i < 3; i++) {
	const liItem = document.createElement('li');
	const aItem = document.createElement('a');
	aItem.setAttribute('href', url[i]);
	aItem.textContent = text[i];
	liItem.append(aItem);
	menu.append(liItem);
}

nav.append(menu);
