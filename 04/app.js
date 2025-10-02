console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

const menu = document.createElement('ul');

//bez foreach
menu.innerHTML = `
    <li><a href="/">start</a></li>
    <li><a href="/gallery">galeria</a></li>
    <li><a href="/contact">kontakt</a></li>`;

//z foreach
menuItems.forEach((el) => {
	const li = document.createElement('li');
	const a = document.createElement('a');
	a.innerText = el.text;
	a.setAttribute('href', el.url);
	li.appendChild(a);
	menu.appendChild(li);
});

document.querySelector('nav').appendChild(menu);
