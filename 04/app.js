console.log('DOM');
/*
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const a1 = document.createElement('a')
a1.setAttribute('href','/');
a1.innerText = 'start';
li1.appendChild(a1);
ul.appendChild(li1);
nav.appendChild(ul);

const li2 = document.createElement('li');
const a2 = document.createElement('a');
a2.setAttribute('href','/gallery');
a2.innerText = 'galeria';
ul.appendChild(li2);
li2.appendChild(a2);

const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.setAttribute('href', '/contact');
a3.innerText = 'kontakt';
ul.appendChild(li3);
li3.appendChild(a3);
*/
// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
menuItems.forEach(function(item) {
    console.log(item)
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.appendChild(a);
    ul.appendChild(li);
    a.setAttribute('href', item.url);
    a.innerText = item.text;
});
nav.appendChild(ul);