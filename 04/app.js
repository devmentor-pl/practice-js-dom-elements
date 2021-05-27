console.log('DOM');

/* SPOSÓB NR 1 */
/*
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
const howManyElements = 3;

nav.appendChild(ul);

for(let i = 0; i<howManyElements; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);

    if (i === 0) a.textContent = 'start'; a.setAttribute('href', '/');
    if (i === 1) a.textContent = 'galeria'; a.setAttribute('href', '/contact');
    if (i === 2) a.textContent = 'kontakt'; a.setAttribute('href', '/contact');
}
*/

/* SPOSÓB NR 2 */

const nav = document.querySelector('nav');
const ul = document.createElement('ul');
nav.appendChild(ul);

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

menuItems.forEach(el => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.textContent = el.text;
    a.setAttribute('href', el.url);
})