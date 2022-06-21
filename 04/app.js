console.log('DOM');

const nav = document.querySelector('nav');
const ul = document.createElement('ul');
nav.appendChild(ul)

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

menuItems.forEach((element) => {
    const li = document.createElement('li')
    ul.appendChild(li)
    const a = document.createElement('a')
    li.appendChild(a)
    a.href = element.url
    a.textContent = element.text
})