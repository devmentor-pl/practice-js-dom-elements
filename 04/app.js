console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');

if (ul) {
	nav.appendChild(ul);

	/*let li;
	for (let i = 1; i <= 3; i++) {
		li = document.createElement('li');
		ul.appendChild(li);
	}
	const aFirst = document.createElement('a');
	const aSecond = document.createElement('a');
	const aThird = document.createElement('a');

	aFirst.setAttribute('href', '/');
	aFirst.innerText = 'start';

	aSecond.setAttribute('href', '/gallery');
	aSecond.innerText = 'galeria';

	aThird.setAttribute('href', '/contact');
	aThird.innerText = 'kontakt';

	const children = ul.children;
	children[0].appendChild(aFirst);
	children[1].appendChild(aSecond);
	children[2].appendChild(aThird);*/

	/*rozwiązanie z pętlą */

	for (let i = 0; i < menuItems.length; i++) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.setAttribute('href', menuItems[i]['url']);
		a.innerText = menuItems[i]['text'];
		ul.appendChild(li);
		li.appendChild(a);
	}
}
