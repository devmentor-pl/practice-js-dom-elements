console.log('DOM');

const elementList = document.querySelector('.comments__item.comments__item--newest');

if(elementList !== null) {
    const elementWithAttribute = elementList.querySelectorAll('[data-info]');
    console.log("Liczba pasujących elementów:", elementWithAttribute.length);
};
