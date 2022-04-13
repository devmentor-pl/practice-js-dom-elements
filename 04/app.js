console.log('ZAD 4');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// using innerHTML
// ====================
// const nav = document.querySelector('nav')
// nav.innerHTML = `
//     <ul>
//     <li><a href="/">home</a></li>
//     <li><a href="/gallery">gallery</a></li>
//     <li><a href="/contact">contact</a></li>
//     </ul>
// `


// using createElement, without forEach
// =====================
// const ul = document.createElement('ul')

//     let li1 = document.createElement('li')
//     let a1 = document.createElement('a')
//     a1.setAttribute('href', '/')
//     a1.innerText = 'start'
//     li1.appendChild(a1)
//     ul.appendChild(li1)

//     let li2 = document.createElement('li')
//     let a2 = document.createElement('a')
//     a2.setAttribute('href', '/gallery')
//     a2.innerText = 'galeria'
//     li2.appendChild(a2)
//     ul.appendChild(li2)

//     let li3 = document.createElement('li')
//     let a3 = document.createElement('a')
//     a3.setAttribute('href', '/constct')
//     a3.innerText = 'kontakt'
//     li3.appendChild(a3)
//     ul.appendChild(li3)

// const nav = document.querySelector('nav')
// nav.appendChild(ul)


// using loop - forEach
// =====================
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


