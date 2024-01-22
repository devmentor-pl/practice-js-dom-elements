console.log('DOM');

const commentsNewest = document.querySelector('.comments__item.comments__item--newest');

const dataInfoCount = commentsNewest && commentsNewest.querySelectorAll('[data-info]').length;

console.log(dataInfoCount);