console.log('DOM');

const liElList = document.querySelector('.comments__item.comments__item--newest');

if(liElList){
    const dataInfoEl = liElList.querySelectorAll('[data-info]');
    console.log(dataInfoEl.length)
}
