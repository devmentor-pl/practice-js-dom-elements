console.log('DOM');

let element = document.querySelector('.comments__item.comments__item');
let element_with_data_info = element.querySelectorAll('[data-info]');

console.log(element_with_data_info.length);
