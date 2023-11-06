console.log('DOM');

const commentsList =
    document.querySelector('.comments__item.comments__item--newest');
console.log(commentsList);

const dataInfoList = commentsList.querySelectorAll('[data-info]')

 if (dataInfoList !== null) {
    

    console.log(dataInfoList.length)

 }



