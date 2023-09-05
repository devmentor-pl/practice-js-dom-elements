console.log('DOM');


const element = document.querySelector(".comments__item.comments__item--newest");
const elementTwo = element.querySelectorAll('[data-info]');
console.log(`Liczba elementów z atrybutem data-info: ${elementTwo.length}`);