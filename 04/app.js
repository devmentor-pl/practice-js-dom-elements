console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

nav.innerHTML = `
 <ul>
   <li><a href="/">start</a></li>
    <li><a href="/gallery">galeria</a></li>
    <li><a href="/contact">kontakt</a></li>
 </ul>
`
menuItems.forEach(link => {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);

// Utwórz poniższą strukturę menu za pomocą JS:

// ```
// <ul>
//     <li><a href="/">start</a></li>
//     <li><a href="/gallery">galeria</a></li>
//     <li><a href="/contact">kontakt</a></li>
// </ul>
// ```

// Całość wstaw do elementu `<nav/>`.

// Początkowo spróbuj wykonać to zadanie bez wykorzystania poniższej struktury:

// ```
// const menuItems = [
//     {text: 'start', url: '/'},
//     {text: 'galeria', url: '/gallery'},
//     {text: 'kontakt', url: '/contact'},
// ]
// ```

// Następnie zrób to samo, ale używając danych wraz z np. [forEach](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/forEach).