console.log('DOM');
const item = document.querySelector('.comments__item.comments__item--newest');
console.log(item);
const spanList = item.querySelectorAll('[data-info]');
console.log(spanList.length);