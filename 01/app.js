console.log('DOM')

const commentItem = document.querySelector(
	'.comments__item.comments__item--newest'
)

if (commentItem) {
	const dataInfoList = commentItem.querySelectorAll('[data-info]')
	console.log(dataInfoList)
	console.log(`Elementy z atrybutem 'data-info': ${dataInfoList.length}`)
}
