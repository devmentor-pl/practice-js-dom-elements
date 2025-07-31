console.log('DOM');
const liElement = document.querySelector('.comments__item, .comments__item--newest');
if (liElement) {
    const spanElements = [...liElement.querySelectorAll('[data-info]')];
    console.log(spanElements.length);
};

