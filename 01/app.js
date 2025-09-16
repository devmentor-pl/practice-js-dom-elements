console.log('DOM');

const elementClass = document.querySelector('.comments__item.comments__item--newest')
// elementClass.textContent = ''


const dataInfoList = elementClass.querySelectorAll('[data-info]')

console.log(elementClass)
console.log(dataInfoList.length)
