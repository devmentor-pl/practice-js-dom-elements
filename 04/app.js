console.log('DOM');

// (1) Utwórz poniższą strukturę menu za pomocą JS:

// ```
// <ul>
//     <li><a href="/">start</a></li>
//     <li><a href="/gallery">galeria</a></li>
//     <li><a href="/contact">kontakt</a></li>
// </ul>
// ``` 

// struktura do wykorzystania w pętli

const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
nav.style.backgroundColor = 'orange';

// (2) Całość wstaw do elementu `<nav/>`.

// Rozwiązanie (1): innerHTML

let div_01 = document.createElement('div');
div_01.innerHTML = 'Rozwiązanie (1): innerHTML';
nav.appendChild(div_01);

// (3) Początkowo spróbuj wykonać to zadanie bez wykorzystania poniższej struktury:

const ul_01 = document.createElement('ul');
ul_01.innerHTML = `<li><a href='/'>start</a></li> <li><a href='/gallery'>galeria</a></li> <li><a href='/contact'>kontakt</a></li>`
nav.appendChild(ul_01);
console.log(ul_01)

// (4) Następnie zrób to samo, ale używając danych 
// ```
// const menuItems = [
//     {text: 'start', url: '/'},
//     {text: 'galeria', url: '/gallery'},
//     {text: 'kontakt', url: '/contact'},
// ]
// ```
// wraz z np. [forEach](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/forEach).

//----------------------------------------------------------------------------------------
// Rozwiązanie (2): pętla FOR

let div_02 = document.createElement('div');
div_02.innerHTML = 'Rozwiązanie (2): pętla FOR';
nav.appendChild(div_02);

const ul_02 = document.createElement('ul');

for (let i = 0; i < menuItems.length; i++) {
    const a = document.createElement('a');
    a.textContent = menuItems[i].text;
    a.setAttribute('href', menuItems[i].url);
    const li = document.createElement('li');
    li.appendChild(a);
    ul_02.appendChild(li);
}
nav.appendChild(ul_02);
console.log(ul_02)

//----------------------------------------------------------------------------------------
// Rozwiązanie (3): pętla FOR IN

let div_03 = document.createElement('div');
div_03.innerHTML = 'Rozwiązanie (3): pętla FOR IN';
nav.appendChild(div_03);

const ul_03 = document.createElement('ul');

for (const level_01 in menuItems) {
    if (level_01 !== '') {
        const a = document.createElement('a');
        a.textContent = menuItems[level_01].text;
        a.setAttribute('href', menuItems[level_01].url);
        const li = document.createElement('li');
        li.appendChild(a);
        ul_03.appendChild(li);
    }
}
nav.appendChild(ul_03);
console.log(ul_03)
