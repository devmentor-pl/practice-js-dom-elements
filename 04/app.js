console.log('DOM')

// struktura do wykorzystania w pętli
const menuItems = [
	{ text: 'start', url: '/' },
	{ text: 'galeria', url: '/gallery' },
	{ text: 'kontakt', url: '/contact' },
]

const nav = document.querySelector('nav')
const navList = document.createElement('ul')

// nav.innerHTML = `
//     <ul>
//         <li><a href="/">home</a></li>
//         <li><a href="/gallery">gallery</a></li>
//         <li><a href="/contact">contact</a></li>
//     </ul>
//     `

// z użyciem pętli forEach
menuItems.forEach(function (el) {
	const navItem = document.createElement('li')
	const navLink = document.createElement('a')
	navLink.innerText = el.text
	navLink.setAttribute('href', el.url)
	navList.appendChild(navItem)
	navItem.append(navLink)
})

nav.appendChild(navList)
