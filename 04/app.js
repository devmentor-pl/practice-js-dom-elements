console.log('ZAD 4');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


const ul = document.createElement('ul')

menuItems.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('href', item.url)
    a.textContent = item.text
    li.appendChild(a)
    ul.appendChild(li)
})

const nav = document.querySelector('nav')
nav.appendChild(ul)




