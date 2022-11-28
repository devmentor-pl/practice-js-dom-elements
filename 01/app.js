console.log('DOM');

const elDoubleClass = document.querySelector(
	'.comments__item.comments__item--newest'
);

const elDataList = elDoubleClass.querySelectorAll('[data-info]');
console.log(elDataList);

console.log(elDataList.length);
