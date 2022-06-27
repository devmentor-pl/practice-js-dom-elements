console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav')
const menu = document.createElement('ul')

nav.appendChild(menu)

menuItems.forEach(function(item) {
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')

    menu.appendChild(liElement)
    liElement.appendChild(aElement)

    aElement.innerText = item.text;
    aElement.href = item.url;
})


// const nav = document.querySelector('nav')

// const menuList = document.createElement('ul')
// const liElement = document.createElement('li')
// const aElement = document.createElement('a')

// nav.appendChild(menuList)
// menuList.appendChild(liElement)
// liElement.appendChild(aElement)

// aElement.setAttribute('href', '/')
// aElement.textContent = 'start'

// const liElement2 = liElement.cloneNode(true)
// const aElement2 = liElement2.querySelector('a')

// aElement2.setAttribute('href', '/gallery')
// aElement2.textContent = 'galeria'

// menuList.appendChild(liElement2)

// const liElement3 = liElement.cloneNode(true)
// const aElement3 = liElement3.querySelector('a')

// aElement3.setAttribute('href', '/contact')
// aElement3.textContent = 'kontakt'

// menuList.appendChild(liElement3)

