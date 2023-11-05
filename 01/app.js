console.log('DOM');

const commentsList =
    document.querySelector('.comments__item.comments__item--newest');
console.log(commentsList);

const dataInfoList = commentsList.querySelectorAll('[data-info]')

 if (dataInfoList !== null) {
    

    for (let i = 0; i < dataInfoList.length; i++) {
         console.log( (i +1) + " "  +"wyszukany element");

    }

 }



