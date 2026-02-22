// console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');

if (nav) {
	const menu = document.createElement('ul');

	const li1 = document.createElement('li');
	const a1 = document.createElement('a');
	a1.href = '/';
	a1.textContent = 'start';
	li1.appendChild(a1);

	const li2 = document.createElement('li');
	const a2 = document.createElement('a');
	a2.href = '/gallery';
	a2.textContent = 'galeria';
	li2.appendChild(a2);

	const li3 = document.createElement('li');
	const a3 = document.createElement('a');
	a3.href = '/contact';
	a3.textContent = 'kontakt';
	li3.appendChild(a3);

	menu.appendChild(li1);
	menu.appendChild(li2);
	menu.appendChild(li3);

	nav.appendChild(menu);
}

if (nav) {
	const menu = document.createElement('ul');

	menuItems.forEach(item => {
		const li = document.createElement('li');
		const a = document.createElement('a');

		a.textContent = item.text;
		a.href = item.url;

		li.appendChild(a);
		menu.appendChild(li);
	});

	nav.appendChild(menu);
}
