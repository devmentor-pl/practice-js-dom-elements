console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
  { text: 'start', url: '/' },
  { text: 'galeria', url: '/gallery' },
  { text: 'kontakt', url: '/contact' },
];

// z użyciem pętli
const navElement = document.querySelector('nav');
const ulElement = document.createElement('ul');

menuItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
  
    a.setAttribute('href', item.url);      
    a.innerText = item.text;               
  
    li.appendChild(a);
    ulElement.appendChild(li);
  });
  
  navElement.appendChild(ulElement);

//bez pętli

const ulElement = document.createElement('ul');
const li1 = document.createElement('li');
const a1 = document.createElement('a');
const li2 = document.createElement('li');
const a2 = document.createElement('a');
const li3 = document.createElement('li');
const a3 = document.createElement('a');
const navElement = document.querySelector('nav');
a1.setAttribute('href', '/');
a1.innerText = 'start';
li1.appendChild(a1);
ulElement.appendChild(li1);


a2.setAttribute('href', '/gallery');
a2.innerText = 'galeria';
li2.appendChild(a2);
ulElement.appendChild(li2);

a3.setAttribute('href', '/contact');
a3.innerText = 'kontakt';
li3.appendChild(a3);
ulElement.appendChild(li3);


navElement.appendChild(ulElement);

