console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');

// if (navElement) {
//     navElement.innerHTML = `
//         <ul>
//             <li><a href="/">start</a></li>
//             <li><a href="/gallery">galeria</a></li>
//             <li><a href="/contact">kontakt</a></li>
//         </ul>`;
// };

if (navElement) {
    const ul = document.createElement('ul');
    navElement.appendChild(ul);
    menuItems.forEach(function (el) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${el.url}">${el.text}</a>`;
            document.querySelector('ul').appendChild(li)
    });
};