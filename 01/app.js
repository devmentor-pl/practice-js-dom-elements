console.log('DOM');

const comment = document.querySelector('.comments__item.comments__item--newest');

console.log(comment);

const attributes = comment.querySelectorAll('[data-info]');
console.log(attributes.length);
