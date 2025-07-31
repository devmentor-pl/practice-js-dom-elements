console.log('DOM');

// const twoClassElement = document.getElementsByClassName('comments__item comments__item--newest');
// if(twoClassElement !== null){
// console.log(twoClassElement);
// const atrInClass = twoClassElement[0].querySelectorAll('.data-info');
// console.log(atrInClass);
// }


const twoClassEl = document.querySelectorAll('.comments__item.comments__item--newest')

console.log(twoClassEl);

if(twoClassEl !== 0){
const atrInClass = twoClassEl[0].querySelectorAll('span[data-info]')
console.log(atrInClass)
}


