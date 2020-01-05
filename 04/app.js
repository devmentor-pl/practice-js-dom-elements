const appendItem = (url, text) => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.href = url
    link.text = text
    item.appendChild(link)
    return item
}

const nav = document.querySelector('nav')
const links = document.createElement('ul')

//////////////////////////////////

links.appendChild(appendItem('/', 'start'))
links.appendChild(appendItem('/gallery', 'galeria'))
links.appendChild(appendItem('/contact', 'kontakt'))
nav.appendChild(links)

//////////////////////////

const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
]

menuItems.forEach(item => {
    links.appendChild(appendItem(item.url, item.text))
})

nav.appendChild(links)