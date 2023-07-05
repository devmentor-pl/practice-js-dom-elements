console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.text;
    a.setAttribute('href', item.url);
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
