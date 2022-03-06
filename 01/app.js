console.log('DOM');

const element = document.querySelector('.comments__item.comments__item--newest');

if(element) {
    const dataInfoList = element.querySelectorAll('[data-info]')
    console.log(dataInfoList.length);
}