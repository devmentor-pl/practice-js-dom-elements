console.log('DOM');

const twoClassElement = document.querySelector('.comments__item.comments__item--newest');

console.log(twoClassElement);

if (twoClassElement) {
    const elementWithAttribute = twoClassElement.querySelectorAll('[data-info]');

    console.log(elementWithAttribute);
}





