console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement =document.querySelector('nav')

// const ulElement = document.createElement('ul')
// const liElement = document.createElement('li')
// const aElement = document.createElement('a')
// liElement.appendChild(aElement)
// ulElement.appendChild(liElement)
// navElement.appendChild(ulElement)

// aElement.innerText = 'start'
// aElement.setAttribute('href', '/')

// const liElement1 = liElement.cloneNode(true)
// const aElement1 = liElement1.querySelector('a')
// aElement1.innerText = 'galeria'
// aElement1.href = '/gallery'

// ulElement.appendChild(liElement1)

// const liElement2 = liElement.cloneNode(true)
// const aElement2 = liElement2.querySelector('a')
// aElement2.innerText = 'kontakt'
// aElement2.href = '/contact'

// ulElement.appendChild(liElement2)

const ulElement = document.createElement('ul')
navElement.appendChild(ulElement)
menuItems.forEach(function(item) {
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')

    liElement.appendChild(aElement)
    ulElement.appendChild(liElement)

    aElement.innerText = item.text
    aElement.href = item.url
})