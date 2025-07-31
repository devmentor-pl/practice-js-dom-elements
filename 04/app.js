console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

/* First try
const navLocation = document.querySelector('nav');
const menu = document.createElement('ul');

const menuContainer1 = document.createElement('li');
const menuContainer2 = document.createElement('li');
const menuContainer3 = document.createElement('li');
const anchor1 = document.createElement('a');
const anchor2 = document.createElement('a');
const anchor3 = document.createElement('a');

console.log(anchor1);

anchor1.setAttribute('href', '/');
anchor2.setAttribute('href', '/gallery');
anchor3.setAttribute('href', '/contact');

anchor1.innerText = 'start';
anchor2.innerText = 'galeria';
anchor3.innerText = 'kontakt';

menu.appendChild(menuContainer1);
menu.appendChild(menuContainer2);
menu.appendChild(menuContainer3);
menuContainer1.appendChild(anchor1);
menuContainer2.appendChild(anchor2);
menuContainer3.appendChild(anchor3);

navLocation.appendChild(menu);
*/

/* Second try
const navLocation = document.querySelector("nav");

const menuStructure = document.createRange();
const menu = menuStructure.createContextualFragment(`
    <ul>
      <li><a href="/">start</a></li>
      <li><a href="/gallery">galeria</a></li>
      <li><a href="/contact">kontakt</a></li>
    </ul>
`);

navLocation.appendChild(menu);
*/

const navLocation = document.querySelector("nav");
const menu = document.createElement("ul");

menuItems.forEach(function (element) {
  const a = document.createElement('a');
  const li = document.createElement('li');

  a.setAttribute('href', element.url);
  a.innerText = element.text;

  li.appendChild(a);
  menu.appendChild(li);
});

navLocation.appendChild(menu);