console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav');

// if (nav) {
//     const navList = document.createElement('ul');
//     nav.appendChild(navList);
//     const navItemFirst = document.createElement('li');
//     const navItemSecond = document.createElement('li');
//     const navItemThird = document.createElement('li');
//     const navLinkFirst = document.createElement('a');
//     const navLinkSecond = document.createElement('a');
//     const navLinkThird = document.createElement('a');

//     navList.append(navItemFirst, navItemSecond, navItemThird);
//     navLinkFirst.setAttribute('href', '/')
//     navLinkFirst.innerText = 'start';
//     navLinkSecond.setAttribute('href', '/gallery')
//     navLinkSecond.innerText = 'galeria';
//     navLinkThird.setAttribute('href', '/contact')
//     navLinkThird.innerText = 'kontakt';

//     navItemFirst.appendChild(navLinkFirst);
//     navItemSecond.appendChild(navLinkSecond);
//     navItemThird.appendChild(navLinkThird);
// }


const createItem = function (item) {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');

    navLink.innerText = item.text;
    navLink.setAttribute('href', item.url);
    navItem.appendChild(navLink);

    return navItem;
}

if (nav) {
    const navList = document.createElement('ul');
    nav.appendChild(navList);

    menuItems.forEach(function (item) {
        const navItem = createItem(item);
        navList.appendChild(navItem);
    })
}
