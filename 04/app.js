console.log('DOM')

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
]

const nav = document.querySelector('nav')

const ul = document.createElement('ul')

const listElements = menuItems.forEach((element) => {
    const li = document.createElement('li')
    const anchor = document.createElement('a')
    anchor.setAttribute("href", element.url)
    anchor.textContent = element.text
    li.appendChild(anchor)
    ul.appendChild(li)
})

nav.appendChild(ul)


