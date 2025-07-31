console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' }
];

let nav = document.querySelector('nav');

let ul = document.createElement('ul');
ul.innerHTML = menuItems.map(({ text, url }) => `<li><a href="${url}">${text}</a></li>`).join('');

nav.appendChild(ul);
