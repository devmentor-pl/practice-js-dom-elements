const commentsNewest = document.querySelector('.comments__item.comments__item--newest');

if(commentsNewest){
    const dataInfoCount = commentsNewest.querySelectorAll('[data-info]').length;
    console.log(dataInfoCount);
}

