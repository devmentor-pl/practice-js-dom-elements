console.log('DOM');

const commentsItem = document.querySelector(
	'.comments__item.comments__item--newest'
);

const dataInfo = commentsItem.querySelectorAll('[data-info]');

console.log(dataInfo.length);
