console.log('DOM');
let sum = 0;
const commentsItems = document.querySelector('.comments__item.comments__item--newest');
if (commentsItems) {
    console.log(commentsItems);
    const dataInfoElements = commentsItems.querySelectorAll('[data-info]');
    if (dataInfoElements) {
            console.log('data-info wystepuje ' + dataInfoElements.length + ' razy');
        }
    }

