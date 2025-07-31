// Utwórz poniższą strukturę menu za pomocą JS:

// ```
// <ul>
//     <li><a href="/">start</a></li>
//     <li><a href="/gallery">galeria</a></li>
//     <li><a href="/contact">kontakt</a></li>
// </ul>
// ```

// Całość wstaw do elementu `<nav/>`.

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');

const ul = document.createElement('ul');


// const links = [
// 	{ href: '/', text: 'home' },
// 	{ href: '/gallery', text: 'gallery' },
// 	{ href: '/contact', text: 'contact' },
// ];

menuItems.forEach(menuItem => {
    const liItem = document.createElement('li'); // Create a <li> element
    const anchor = document.createElement('a'); // Create an <a> element

    anchor.setAttribute('href', menuItem.url); // Set the href attribute of the <a> element
    anchor.textContent = menuItem.text; // Set the text content of the <a> element

    liItem.append(anchor); // Append the <a> element to the <li> element
    ul.append(liItem); // Append the <li> element to the <ul> element
});

nav.append(ul); // Append the <ul> element to the <nav> element
