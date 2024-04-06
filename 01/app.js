console.log('DOM');

const classElement = document.querySelector('.comments__item.comments__item--newest');

if (classElement && classElement.hasChildNodes()) {
    const children = classElement.children;
    const newArray = Array.from(children);
    const arr = [];
    for (let i = 0; i < newArray.length; i++) {

        if (!newArray[i].hasAttribute('data-info')) {
            arr.push(children[i]);
        }

    }
    console.log(arr.length);
}