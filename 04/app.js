console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');
nav.append(ul);

menuItems.forEach(el => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('href', el.url)
  a.innerText = el.text;
  ul.append(li);
  li.append(a);
    
})


/*
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
const li = document.createElement('li');

const a1 = document.createElement('a');
a1.innerText = 'start';
a1.setAttribute('href', '/');

nav.append(ul);
ul.append(li);
li.append(a1);

const li2 = document.createElement('li');
const a2 = document.createElement('a');
a2.innerText = 'galeria';
a2.setAttribute('href', 'gallery');

ul.append(li2);
li2.append(a2);

const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.innerText = 'kontakt';
a3.setAttribute('href', 'contact');

ul.append(li3);
li3.append(a3);
*/



