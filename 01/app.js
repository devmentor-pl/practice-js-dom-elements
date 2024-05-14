const listItem = document.querySelector('.comments__item.comments__item--newest');
const dataItems = listItem.querySelectorAll('[data-info]');

console.log(`Zostały znalezione ${dataItems.length} elementy z atrybutem data-info`);