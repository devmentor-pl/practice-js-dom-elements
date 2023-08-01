console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

// const navElement = document.querySelector('nav');
// const ulElement = document.createElement('ul');
// navElement.appendChild(ulElement);
// const liElement = document.createElement('li');
// const liElement2 = document.createElement('li');
// const liElement3 = document.createElement('li');

// ulElement.append(liElement, liElement2, liElement3);

// const aElement = document.createElement('a');
// // first link
// aElement.textContent = 'start';
// aElement.setAttribute('href', '/');

// const aElement2 = document.createElement('a');
// // second link
// aElement2.textContent = 'galeria';
// aElement2.setAttribute('href', '/gallery');

// const aElement3 = document.createElement('a');
// // third link
// aElement3.textContent = 'kontakt';
// aElement3.setAttribute('href', '/contact');

// liElement.appendChild(aElement);
// liElement2.appendChild(aElement2);
// liElement3.appendChild(aElement3);
// console.log(navElement);

console.log(`=========`);

// pomysl zeby przeiterowac menuItems i zeby na jej iteracji tworzyc obiekt, to musialem skorzystac z gpt, bo sam bym na to nie wpadl :/ ale kod napisalem sam, tylko spojrzalem na iteracje po menuItems. w pelni rozumiem co napisalem ponizej (y)

const navElement = document.querySelector('nav');
const ulElement = document.createElement('ul');
navElement.append(ulElement);
menuItems.forEach(item => {
    const liElement = document.createElement('li');
	ulElement.appendChild(liElement);
	const aElement = document.createElement('a');
	aElement.textContent = item.text;
	aElement.setAttribute('href', item.url);
	liElement.appendChild(aElement);
});

console.log(navElement);