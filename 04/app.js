console.log('DOM');

// Utwórz poniższą strukturę menu za pomocą JS:

// <ul>
//     <li><a href="/">start</a></li>
//     <li><a href="/gallery">galeria</a></li>
//     <li><a href="/contact">kontakt</a></li>
// </ul>
// Całość wstaw do elementu <nav/>.

// Początkowo spróbuj wykonać to zadanie bez wykorzystania poniższej struktury:

// const menuItems = [
//     {text: 'start', url: '/'},
//     {text: 'galeria', url: '/gallery'},
//     {text: 'kontakt', url: '/contact'},
// ]
// Następnie zrób to samo, ale używając danych wraz z np. forEach.



// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const navElement = document.querySelector('nav');


if (navElement) {
    const links = [
        { text: 'start', href: '/' },
        { text: 'galeria', href: '/gallery' },
        { text: 'kontakt', href: '/contact' }
    ];

    links.forEach(function (link) {
        const liEl = document.createElement('li');
        const aEl = document.createElement('a');
        aEl.innerText = link.text;
        aEl.setAttribute('href', link.href);
        liEl.appendChild(aEl);
        navElement.appendChild(liEl);
    })
    // if (navElement) {
    //     const liEl = document.createElement('li');
    //     const liEl2 = document.createElement('li');
    //     const liEl3 = document.createElement('li');
    //     const aEl = document.createElement('a');
    //     const aEl2 = document.createElement('a');
    //     const aEl3 = document.createElement('a');
    //     aEl.innerText = 'start';
    //     aEl2.innerText = 'galeria';
    //     aEl3.innerText = 'kontakt';
    //     aEl.setAttribute('href', '/');
    //     aEl2.setAttribute('href', '/gallery');
    //     aEl3.setAttribute('href', '/contact');


    //     navElement.appendChild(liEl);
    //     liEl.appendChild(aEl);
    //     navElement.appendChild(liEl2);
    //     liEl2.appendChild(aEl2);
    //     navElement.appendChild(liEl3);
    //     liEl3.appendChild(aEl3);

    // }
}