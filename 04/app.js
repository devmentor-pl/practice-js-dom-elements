console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');

for(let i = 0; i < 3; i++) {
   ul.appendChild(document.createElement('li'));
}
nav.appendChild(ul);

const liList = ul.querySelectorAll('li');
liList.forEach((li) => li.appendChild(document.createElement('a')));

const linkList = ul.querySelectorAll('a');
 linkList.forEach((a, index) => {
   a.innerText = menuItems[index].text;
   a.setAttribute('href', menuItems[index].url);
 });
