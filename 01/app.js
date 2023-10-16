console.log('DOM')

const newestItem = document.querySelector('.comments__item, .comments__item--newest')

if (newestItem !== null) {
	const dataEl = newestItem.querySelectorAll('[data-info]')
	if (dataEl) {
		// const dataElArr = [...dataEl]
		// console.log(dataElArr.length)
		console.log(dataEl.length)
	}
}
