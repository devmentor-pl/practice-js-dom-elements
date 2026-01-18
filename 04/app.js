console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector("nav")
const menu1 = document.createElement("ul")
const menu2 = document.createElement("ul")

// Struktura innerHTML

menu1.innerHTML = "<li><a href='/'>home</a></li><li><a href='/gallery'>gallery</a></li><li><a href='/contact'>contact</a></li>";

nav.appendChild(menu1);

// Pętla

menuItems.forEach(function (e) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerText = e.text;
    a.setAttribute("href", e.url);

    menu2.appendChild(li).appendChild(a);
});

nav.appendChild(menu2);