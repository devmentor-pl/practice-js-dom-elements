console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const ul = document.createElement('ul');

const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = '/';
a1.textContent = 'start';
li1.appendChild(a1);
ul.appendChild(li1);

const li2 = document.createElement('li');
const a2 = document.createElement('a');
a2.href = '/gallery';
a2.textContent = 'galeria';
li2.appendChild(a2);
ul.appendChild(li2);

const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = '/contact';
a3.textContent = 'kontakt';
li3.appendChild(a3);
ul.appendChild(li3);

const nav = document.querySelector('nav');
if (nav) {
    nav.appendChild(ul);
}