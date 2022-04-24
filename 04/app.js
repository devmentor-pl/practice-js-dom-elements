console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

// ---------------------------------------------------------------------
// WARIANT 1 - RĘCZNIE

// const listContainer = document.querySelector('nav')
// listContainer.appendChild(document.createElement('ul'))
// const newList = document.querySelector('nav > ul')
// const firstLi = newList.appendChild(document.createElement('li'))
// const secondLi = newList.appendChild(document.createElement('li'))
// const thirdLi = newList.appendChild(document.createElement('li'))

// const ulItems = newList.querySelectorAll('li')
// console.log(ulItems)
// for (let i = 0; i < ulItems.length; i++) {
//     ulItems[i].appendChild(document.createElement('a'))
// }


// const firstLiLink = firstLi.querySelector('a')
// firstLiLink.setAttribute('href', '/')

// const secondLiLink = secondLi.querySelector('a')
// secondLiLink.setAttribute('href', '/gallery')

// const thirdLiLink = thirdLi.querySelector('a')
// thirdLiLink.setAttribute('href', '/contact')

// firstLiLink.textContent = 'start'
// secondLiLink.textContent = 'galeria'
// thirdLiLink.textContent = 'kontakt'


// ---------------------------------------------------------------------
// WARIANT II - Z WYKORZYSTANIEM MENU ITEMS

const ulElement = document.createElement('ul')
const listContainer = document.querySelector('nav')
listContainer.appendChild(ulElement)
menuItems.forEach(function (item) {
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')

    liElement.appendChild(aElement)
    ulElement.appendChild(liElement)

    aElement.innerText = item.text
    aElement.href = item.url
});
