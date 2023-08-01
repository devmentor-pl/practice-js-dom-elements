console.log('DOM');
const someElem = document.querySelector('.comments__item.comments__item--newest');
console.log(someElem);
if(someElem){
    const dataInfoElems = someElem.querySelectorAll('[data-info]');
    console.log(dataInfoElems);
    console.log('ilość elementów: ', dataInfoElems.length);
}

