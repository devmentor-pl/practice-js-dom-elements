console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const menu = document.querySelector('nav')
menu.innerHTML=`<ul>
<li><a href="/">start</a></li>
<li><a href="/gallery">galeria</a></li>
<li><a href="/contact">kontakt</a></li>
</ul>`