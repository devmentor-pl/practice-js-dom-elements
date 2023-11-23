console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
  {text: 'start', url: '/'},
  {text: 'galeria', url: '/gallery'},
  {text: 'kontakt', url: '/contact'},
];

const navEl = document.querySelector('nav');
const navList = document.createElement('ul');
navEl.appendChild(navList);
for (let i = 0; i < 3; i++) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navList.appendChild(navItem);
  navItem.appendChild(navLink);
}
const navLink = document.querySelectorAll('a');
navLink[0].setAttribute('href', '/');
navLink[0].innerText = 'home';
navLink[1].setAttribute('href', '/gallery');
navLink[1].innerText = 'galeria';
navLink[2].setAttribute('href', '/contact');
navLink[2].innerText = 'kontakt';
