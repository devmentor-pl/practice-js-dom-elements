console.log('DOM');

const className = document.querySelector('.comments__item.comments__item--newest');
let dataInfo;
if(className !== null) {
    dataInfo = className.dataset.info;
};

const elementsWithDataInfo = document.querySelectorAll('[data-info');
console.log(`Ilość znalezionych elementów data-info wynosi ${elementsWithDataInfo.length}`)