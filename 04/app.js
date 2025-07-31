'use strict';

// struktura do wykorzystania w pętli
const menuItems = [
  { text: 'start', url: '/' },
  { text: 'galeria', url: '/gallery' },
  { text: 'kontakt', url: '/contact' },
];
const navElement = document.querySelector('nav');

// bez użycia menuItems
// if (navElement) {
//   const newUl = document.createElement('ul');
//   const newLi1 = document.createElement('li');
//   const newLi2 = document.createElement('li');
//   const newLi3 = document.createElement('li');

//   const newA1 = document.createElement('a');
//   newA1.innerText = 'start';
//   newA1.setAttribute('href', '/');

//   const newA2 = document.createElement('a');
//   newA2.innerText = 'galeria';
//   newA2.setAttribute('href', '/gallery');

//   const newA3 = document.createElement('a');
//   newA3.innerText = 'kontakt';
//   newA3.setAttribute('href', '/contact');

//   navElement.appendChild(newUl);
//   newUl.appendChild(newLi1);
//   newLi1.appendChild(newA1);
//   newUl.appendChild(newLi2);
//   newLi2.appendChild(newA2);
//   newUl.appendChild(newLi3);
//   newLi3.appendChild(newA3);
// }

// z użyciem menuItems
if (navElement) {
  let newUl = document.createElement('ul');
  navElement.appendChild(newUl);

  menuItems.forEach((menuItems) => {
    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    newA.setAttribute('href', `${menuItems.url}`);
    newA.textContent = menuItems.text;
    newUl.appendChild(newLi);
    newLi.appendChild(newA);
  });
}
