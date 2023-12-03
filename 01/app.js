console.log('DOM');
const element = document.querySelector('.comments__item.comments__item--newest');

if(element) {
    const elWithAtt = element.querySelectorAll('[data-info]');
    console.log(elWithAtt.length);
}