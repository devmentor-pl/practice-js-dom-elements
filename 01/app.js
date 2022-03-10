console.log('DOM');

const comment = document.querySelector('.comments__item.comments__item--newest'); 

const infoElements =  comment.querySelectorAll('[data-info]');

console.log(`Liczba elementów z atrybutem data-info: ${infoElements.length}`);