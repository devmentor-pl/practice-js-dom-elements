console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const bodyEl = document.querySelector('body nav');

// poniższe zwraca mi bład, dlaczego?
// bodyEl.appendChild(menuItems);
// console.log(window);



// ******************************
// ********* PART I  ************
// ******************************
      // Początkowo spróbuj wykonać to zadanie bez wykorzystania
      // poniższej struktury:

// add ul
const uList = document.createElement('ul');
const list = bodyEl.appendChild(uList);

// add li
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const liStart = list.appendChild(li1);
const liGallery = list.appendChild(li2);
const liContact = list.appendChild(li3);

// add a
const aLi1 = document.createElement('a');
aLi1.innerText = 'start';
aLi1.href = '/';
const aLi2 = document.createElement('a');
aLi2.innerText = 'galeria';
aLi2.href = '/gallery';
const aLi3 = document.createElement('a');
aLi3.innerText = 'kontakt';
aLi3.href = '/contact';

// append a
li1.appendChild(aLi1);
li2.appendChild(aLi2);
li3.appendChild(aLi3);

// test
console.log(document.querySelector('nav'));



// ******************************
// ********* PART II  ************
// ******************************

// patrz => app_with_foreach.js
