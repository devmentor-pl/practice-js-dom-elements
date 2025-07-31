console.log('DOM');

// const navElement = document.querySelector('nav')
// const ulElement = document.createElement('ul')
// navElement.appendChild(ulElement)

// const liElement1 = document.createElement('li')
// const liElement2 = document.createElement('li')
// const liElement3 = document.createElement('li')
// ulElement.appendChild(liElement1)
// ulElement.appendChild(liElement2)
// ulElement.appendChild(liElement3)

// const aElement1 = document.createElement('a')
// const aElement2 = document.createElement('a')
// const aElement3 = document.createElement('a')
// liElement1.appendChild(aElement1)
// liElement2.appendChild(aElement2)
// liElement3.appendChild(aElement3)

// aElement1.setAttribute('href', '/')
// aElement2.setAttribute('href', '/gallery')
// aElement3.setAttribute('href', '/contact')

// aElement1.textContent = 'start'
// aElement2.textContent = 'galeria'
// aElement3.textContent = 'kontakt'


// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav')
const ulElement = document.createElement('ul')
navElement.appendChild(ulElement)

menuItems.forEach(function(item){
    const liElement = document.createElement('li')
    ulElement.appendChild(liElement)

    const aElement = document.createElement('a')
    liElement.appendChild(aElement)

    aElement.setAttribute('href', item.url)
    aElement.textContent = item.text
})

