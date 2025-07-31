console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];
// ________________________________________________________________
// const nav = document.querySelector('nav')
// const ul = document.createElement('ul')
// const li1 = document.createElement('li')
// const li2 = document.createElement('li')
// const li3 = document.createElement('li')
// const a1 = document.createElement('a')
// const a2 = document.createElement('a')
// const a3 = document.createElement('a')
// a1.setAttribute('href', '/')
// a1.innerText = 'start'
// a2.setAttribute('href', '/gallery')
// a2.innerText = 'gallery'
// a3.setAttribute('href', '/contact')
// a3.innerText = 'contact'



// nav.appendChild(ul)
// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)
// li1.appendChild(a1)
// li2.appendChild(a2)
// li3.appendChild(a3)
// _________________________________________________________________


// _________________________________________________________________
// const nav = document.querySelector('nav')
// const ul = document.createElement('ul')
// const li = document.createElement('li')
// const a = document.createElement('a')

// li.appendChild(a)
// ul.appendChild(li)
// nav.appendChild(ul)

// a.innerText = 'start'
// a.setAttribute('href', '/')

// const li1 = li.cloneNode(true)
// const a1 = li1.querySelector('a')
// a1.innerText = 'gallery'
// a1.setAttribute('href', '/gallery')
// ul.appendChild(li1)

// const li2 = li.cloneNode(true)
// const a2 = li2.querySelector('a')
// a2.innerText = 'contact'
// a2.setAttribute('href', '/contact')
// ul.appendChild(li2)

// _________________________________________________________________
const nav = document.querySelector('nav')
const ul = document.createElement('ul')
nav.appendChild(ul)
menuItems.forEach(function (item) {
    const li = document.createElement('li')
    const a = document.createElement('a')

    li.appendChild(a)
    ul.appendChild(li)

    a.innerText = item.text
    a.href = item.url

})

