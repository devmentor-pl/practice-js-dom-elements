console.log('DOM');

// Rozwiązanie bez wykorzystania pętli
// const navEl = document.querySelector('nav')
// const ulEl = document.createElement('ul')
// const liEl1 = document.createElement('li')
// const aEl1 = document.createElement('a')

// liEl1.appendChild(aEl1)
// ulEl.appendChild(liEl1)
// navEl.appendChild(ulEl)
// aEl1.setAttribute('href', '/')
// aEl1.innerText = 'start'

// const liEl2 = liEl1.cloneNode(true)
// ulEl.appendChild(liEl2)
// const aEl2 = liEl2.querySelector('a')
// aEl2.setAttribute('href', '/gallery')
// aEl2.innerText = 'galeria'

// const liEl3 = liEl1.cloneNode(true)
// ulEl.appendChild(liEl3)
// const aEl3 = liEl3.querySelector('a')
// aEl3.setAttribute('href', '/contact')
// aEl3.innerText = 'kontakt'

// Rozwiązanie z wykorzystaniem pętli
// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
    // {text: 'blog', url: '/blog'},
];

const navEl = document.querySelector('nav')
const ulEl = document.createElement('ul')
navEl.appendChild(ulEl)

menuItems.forEach(function(item) {
    const liEl = document.createElement('li')
    const aEl = document.createElement('a')

    liEl.appendChild(aEl)
    ulEl.appendChild(liEl)

    aEl.setAttribute('href', item.url)
    aEl.innerText = item.text
})