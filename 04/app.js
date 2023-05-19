console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];


// I opcja

// const nav = document.querySelector('nav')

// nav.innerHTML = 
//     '<ul>\
//         <li><a href="/">start</a></li>\
//         <li><a href="/gallery">galeria</a></li>\
//         <li><a href="/contact">kontakt</a></li>\
//     </ul>'


// II opcja

// const nav = document.querySelector('nav')

// const list = document.createElement('ul')
// const item1 = document.createElement('li')
// const link1 = document.createElement('a')
// const item2 = item1.cloneNode(true)
// const link2 = link1.cloneNode(true)
// const item3 = item1.cloneNode(true)
// const link3 = link1.cloneNode(true)

// if (nav) {

//     link1.innerText = "start"
//     link2.innerText = "galeria"
//     link3.innerText = "kontakt"
//     link1.setAttribute('href', "/")
//     link2.setAttribute('href', "/gallery")
//     link3.setAttribute('href', "/contact")

//     item1.appendChild(link1)
//     item2.appendChild(link2)
//     item3.appendChild(link3)
//     list.appendChild(item1)
//     list.appendChild(item2)
//     list.appendChild(item3)
//     nav.appendChild(list)
// }

// III opcja - z forEach

const nav = document.querySelector('nav')

if (nav) {
    const list = document.createElement('ul')

    menuItems.forEach(function (el) {
        const item = document.createElement('li')
        const link = document.createElement('a')

        for (const key in el) {
            if (key === "text") {
                link.innerText = el[key]
            } else if (key === "url") {
                link.setAttribute('href', el[key])
            }
        }

        item.appendChild(link)
        list.appendChild(item)
    })

    nav.appendChild(list)
}
