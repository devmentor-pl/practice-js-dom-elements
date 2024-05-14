console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');

for(let i = 0; i<menuItems.length; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = menuItems[i].text;
    link.setAttribute('href', menuItems[i].url);
    li.appendChild(link);
    ul.appendChild(li);
}

nav.appendChild(ul);