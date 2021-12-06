console.log('DOM');
const commentClass = document.getElementsByClassName('comments__item comments__item--newest');
// console.log(commentClass);
for(let i=0; i<commentClass.length; i++) {
const dataAttribute = commentClass[i].querySelectorAll('[data-info]');
// console.log(dataAttribute);
const arr = Array.from(dataAttribute);
const arrLength = console.log(arr.length);}
