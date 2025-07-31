console.log('DOM')
const nav = document.querySelector('nav')
const ul = document.createElement('ul')
const secondUl = document.createElement('ul')
const box = `<li><a href="/">start</a></li>
<li><a href="/gallery">galeria</a></li>
<li><a href="/contact">kontakt</a></li>`
ul.innerHTML = box
nav.appendChild(ul)
nav.appendChild(secondUl)

// struktura do wykorzystania w pętli

const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
]
for (let i = 0; i < menuItems.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    secondUl.appendChild(li);
    li.appendChild(a);
    a.innerHTML = menuItems[i].text;
    a.setAttribute("href", menuItems[i].url);
  }