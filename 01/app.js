console.log('DOM');
const doubleClass = document.querySelector('.comments__item.comments__item--newest');
const dataInfo = doubleClass.querySelectorAll('[data-info]');
console.log(`Znaleziono: ${dataInfo.length} elementy`)