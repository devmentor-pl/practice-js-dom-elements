console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const nav = document.querySelector('nav')
const list = document.createElement('ul')
nav.appendChild(list)

menuItems.forEach(function (el) {
    const listItem = document.createElement('li');
    const aElement = document.createElement('a');
    listItem.appendChild(aElement)
    list.appendChild(listItem)
    aElement.innerText = el.text;
    aElement.href = el.url;
})

// const nav = document.querySelector('nav')
// const list = document.createElement('ul')

// nav.appendChild(list)

// list.appendChild(document.createElement('li'))
// list.appendChild(document.createElement('li'))
// list.appendChild(document.createElement('li'))

// const listItems = document.querySelectorAll('li')


// if (listItems) {
//     for (i = 0; i < listItems.length; i++) {
//         listItems[i].appendChild(document.createElement('a'))
//     }
// }

// const aElements = document.querySelectorAll('a')

// if (aElements) {
//     for (i = 0; i < 1; i++) {
//         aElements[i].innerText = 'start'
//         aElements[i].setAttribute('href', '/')
//     }
//     for (i = 1; i < 2; i++) {
//         aElements[i].innerText = 'galeria'
//         aElements[i].setAttribute('href', '/gallery')
//     }
//     for (i = 2; i < 3; i++) {
//         aElements[i].innerText = 'kontakt'
//         aElements[i].setAttribute('href', '/contact')
//     }
// }



