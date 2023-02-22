console.log('DOM');

const element = document.querySelector('.comments__item, .comments__item--newest');
const elDataInfo = element.querySelectorAll('[data-info]');
const elDataInfoList = [...elDataInfo];
console.log('Liczba elementow z atrybutem data-info to ' + elDataInfoList.length);