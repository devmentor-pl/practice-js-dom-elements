console.log('DOM');
const comment = document.querySelector('.comments__item.comments__item--newest');

if(comment){
    const attrElements = comment.querySelectorAll('[data-info');
    console.log(attrElements.length);
}