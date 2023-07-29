console.log('DOM');
const someElem = document.querySelector('.comments__item');
console.log(someElem);
const dataInfoElems = someElem.querySelectorAll('[data-info]');
console.log(dataInfoElems);
console.log('ilość elementów: ', dataInfoElems.length);