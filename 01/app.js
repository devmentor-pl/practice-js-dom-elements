console.log('DOM');

const commentsElement = document.querySelector('.comments__item.comments__item--newest');
const infoElements = commentsElement.querySelectorAll("[data-info]");
console.log(infoElements.length);