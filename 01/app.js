console.log('DOM');

const commentsItem = document.querySelectorAll('.comments__item.comments__item--newest');
console.log('commentsItem.length', commentsItem.length);

if(commentsItem) {
    const dataInfo = commentsItem[0].querySelectorAll('[data-info]');
    console.log('dataInfo', dataInfo);
    console.log('dataInfo.length', dataInfo.length);
}
