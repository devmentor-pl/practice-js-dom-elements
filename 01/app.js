console.log('DOM');
let comments = document.getElementsByClassName('comments__item comments__item--newest');
comments = [...comments];
const a = comments[0].querySelectorAll('[data-info]');
console.log(a.length);
//
const comment = document.querySelector('.comments__item.comments__item--newest');
console.log(comment.querySelectorAll('[data-info]').length);