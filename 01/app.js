console.log('DOM');
const comments = document.querySelector('.comments__item.comments__item--newest');

if (comments) {
    const elementsWithDataInfo = comments.querySelectorAll('[data-info]');
    console.log('The number of elements that have the attribute data-info:', elementsWithDataInfo.length);
} 