console.log('DOM');

const classifiedElement = document.querySelector(".comments__item.comments__item--newest");

if (classifiedElement) {
    const elementWithAttribute = classifiedElement.querySelectorAll('[data-info]');
    console.log(elementWithAttribute.length);
}

