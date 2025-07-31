console.log('DOM');

const elDoubleClass = document.querySelector(
	'.comments__item.comments__item--newest'
);

if (elDoubleClass) {
	const elDataList = elDoubleClass.querySelectorAll('[data-info]');
	console.log(elDataList);

	console.log(elDataList.length);
}
