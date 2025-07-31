console.log('DOM');

const commentsItem = document.querySelector('.comments__item', '.comments__item--newest')
console.log(commentsItem)

if(commentsItem){
    const dataInfoList = commentsItem.querySelectorAll('[data-info]');
    console.log(dataInfoList.length);
}
