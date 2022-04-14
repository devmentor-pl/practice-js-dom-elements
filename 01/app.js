console.log('DOM');

const element = document.querySelector('.comments__item.comments__item--newest');

if(element) {
    const elWithAttrList = element.querySelectorAll('[data-info]');
    console.log(elWithAttrList.length);
}