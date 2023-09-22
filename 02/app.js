console.log('DOM')

const aUrlList = document.querySelectorAll('[data-url]')

aUrlList.forEach(function (el) {
	const link = el.dataset.url
	el.setAttribute('href', link)
})
