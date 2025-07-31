console.log('DOM');

const commentsItem = document.querySelector('.comments__item.comments__item--newest');
console.log('commentsItem', commentsItem);

if(commentsItem) {
    const dataInfo = commentsItem.querySelectorAll('[data-info]');
    console.log('dataInfo', dataInfo);
    console.log('dataInfo.length', dataInfo.length);
}
