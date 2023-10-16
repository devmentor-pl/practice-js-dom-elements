console.log('DOM')

const linksWithDataAtrr = document.querySelectorAll('[data-url]')

if (linksWithDataAtrr) {
	linksWithDataAtrr.forEach(item => {
		const dataUrl = item.getAttribute('data-url')
		item.setAttribute('href', dataUrl)
	})

	console.log(linksWithDataAtrr)
}
