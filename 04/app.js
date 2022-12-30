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


if (nav) {
    const navList = document.createElement('ul');
    nav.appendChild(navList);

    // Create <li> array
    const navItemList = [];
    for (let i = 0; i < 3; i++) {
        const navItem = document.createElement('li');
        navItemList.push(navItem);
    }

    // Create <a> array
    const navLinkList = [];
    for (let j = 0; j < navItemList.length; j++) {
        const navLink = document.createElement('a');
        navLinkList.push(navLink);
    }

    // Fill <a> with content
    navLinkList.forEach(function (item, index) {
        item.innerText = menuItems[index].text;
        item.setAttribute('href', menuItems[index].url);
    })

    // Add <a> to <li> and <li> to <ul>
    navItemList.forEach(function (item, index) {
        item.appendChild(navLinkList[index])
        navList.appendChild(item);
    })
}