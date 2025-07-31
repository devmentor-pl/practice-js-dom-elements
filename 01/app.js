console.log('DOM');

const commentsItem = document.getElementsByClassName("comments__item comments__item--newest");

const elementsWithDataInfo = commentsItem[0].querySelectorAll('[data-info]');

console.log(elementsWithDataInfo.length);