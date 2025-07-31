console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const ul = document.createElement('ul');

//sposób nr 1
ul.innerHTML = `<li>
    <a href="/">start</a>
</li>
<li>
    <a href="/gallery">galeria</a>
</li>
<li>
    <a href="/contact">kontakt</a>
</li>` 

//sposób nr 2
menuItems.forEach(menuItem => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = menuItem.text;
    a.setAttribute('href', menuItem.url)
    ul.appendChild(li);
    li.appendChild(a)
})


document.querySelector('nav').appendChild(ul);