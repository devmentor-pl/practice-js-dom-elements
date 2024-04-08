console.log('DOM');

const classElement = document.querySelector('.comments__item.comments__item--newest');

if (classElement) {

    const allElements = classElement.querySelectorAll('p, li, span')

    const arr = [];
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].hasAttribute('data-info')) {
            arr.push(allElements[i]);
        }

    }
    console.log(arr.length);
}
