'use strict';
const liElement = document.querySelector(
  '.comments__item.comments__item--newest'
);
if (liElement) {
  const dataElement = liElement.querySelectorAll('[data-info]');
  console.log(dataElement.length);
}
