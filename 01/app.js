console.log('DOM');
const listItem = document.querySelector('.comments__item.comments__item--newest');
const elCount = [...listItem.querySelectorAll('span[data-info]')].length; 
console.log(elCount);