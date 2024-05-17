console.log('DOM');

const liElement = document.querySelector('.comments__item.comments__item--newest');

if(liElement) {
    const dataAttribute = liElement.querySelectorAll('[data-info');
    console.log(`${dataAttribute.length}`);
}