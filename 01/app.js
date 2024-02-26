console.log('DOM');

const elementOneClass = document.getElementsByClassName('comments__item');
console.log(elementOneClass); // jest zawartość

const elementBothClasses = elementOneClass.getElementsByClassName('comments__item--newest');
    console.log(elementBothClasses); // błąd

const elementWithAttribute = elementBothClasses.getAttribute('data-info');
console.log(elementWithAttribute); // błąd 