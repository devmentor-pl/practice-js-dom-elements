console.log('DOM');
const nav = document.querySelector('nav')
const ul = document.createElement('ul')

nav.append(ul)

function createDOMElements(ul, url, text) {
    const li = document.createElement('li')
    const a = document.createElement('a')

    ul.append(li)
    li.append(a)

    a.setAttribute('href', url)
    a.innerText = text
}

createDOMElements(ul, '/', 'start')
createDOMElements(ul, '/gallery', 'galeria')
createDOMElements(ul, '/contact', 'kontakt')





// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];
const ul2 = document.createElement('ul')

nav.append(ul2)

menuItems.forEach(el => createDOMElements(ul2, el.url, el.text))


