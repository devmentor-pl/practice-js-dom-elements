<<<<<<< HEAD
const comments = document.getElementsByClassName('comments__item comments__item--newest');
const dataInfo = comments[0].querySelectorAll('[data-info]');
console.log(dataInfo.length);
=======
console.log('DOM');
let comments = document.getElementsByClassName('comments__item comments__item--newest');
comments = [...comments];
const a = comments[0].querySelectorAll('[data-info]');
console.log(a.length);
//
const comment = document.querySelector('.comments__item.comments__item--newest');
console.log(comment.querySelectorAll('[data-info]').length);
>>>>>>> c26d93d111fa91502aa5c69123ee5f25b9a30e9a
