console.log('DOM');

const comments = document.querySelector('.comments__item.comments__item--newest');

    console.log(comments);

    if(comments) {
        const dataInfoList = comments.querySelectorAll('[data-info]');
        console.log(dataInfoList.length);
    }