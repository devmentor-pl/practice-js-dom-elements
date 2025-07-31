console.log('DOM');

const className = document.querySelector('.comments__item.comments__item--newest');

if(className !== null) {
    const elementsWithDataInfo = className.querySelectorAll('[data-info]');
    console.log(`Ilość znalezionych elementów data-info wynosi ${elementsWithDataInfo.length}`)
};