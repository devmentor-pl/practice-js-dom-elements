console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
  { text: 'start', url: '/' },
  { text: 'galeria', url: '/gallery' },
  { text: 'kontakt', url: '/contact' },
];

const navEl = document.querySelector('nav');

const ulEl = document.createElement('ul');
navEl.appendChild(ulEl);

const arr = [];

const createLinkList = menuItems.forEach((item) => {
  const liStartEl = document.createElement('li');
  ulEl.appendChild(liStartEl);

  arr.push(liStartEl);

  const addAEl = document.createElement('a');
  liStartEl.appendChild(addAEl);

  addAEl.setAttribute('href', item.url);
  addAEl.textContent = item.text;
});
