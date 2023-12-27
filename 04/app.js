console.log('DOM')

const nav = document.querySelector('nav')
const list = document.createElement('ul')
const firstListItem = document.createElement('li')
const secondListItem = document.createElement('li')
const thirdListItem = document.createElement('li')

if (list) {
	if (firstListItem) {
		const listItemLink = document.createElement('a')
		listItemLink.textContent = 'home'
		listItemLink.href = '/'
		firstListItem.appendChild(listItemLink)
		list.appendChild(firstListItem)
	}

	if (secondListItem) {
		const listItemLink = document.createElement('a')
		listItemLink.textContent = 'gallery'
		listItemLink.href = '/gallery'
		secondListItem.appendChild(listItemLink)
		list.appendChild(secondListItem)
	}
	if (thirdListItem) {
		const listItemLink = document.createElement('a')
		listItemLink.textContent = 'contact'
		listItemLink.href = '/contact'
		thirdListItem.appendChild(listItemLink)
		list.appendChild(thirdListItem)
	}
}

nav.appendChild(list)

// struktura do wykorzystania w pętli
// const menuItems = [
// 	{ text: 'start', url: '/' },
// 	{ text: 'galeria', url: '/gallery' },
// 	{ text: 'kontakt', url: '/contact' },
// ]

// const nav = document.querySelector('nav')
// const list = document.createElement('ul')

// if (nav) {
// 	menuItems.forEach(item => {
// 		const listItem = document.createElement('li')
// 		const listItemLink = document.createElement('a')
// 		listItemLink.textContent = item.text
// 		listItemLink.href = item.url
// 		listItem.appendChild(listItemLink)
// 		list.appendChild(listItem)
// 	})

// 	nav.appendChild(list)
// }
