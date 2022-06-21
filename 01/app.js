console.log('DOM');

const commentsElement = document.querySelector('.comments__item.comments__item--newest');

if (commentsElement && commentsElement.hasChildNodes()) {
    const dataInfoList = commentsElement.querySelectorAll('[data-info]')
    console.log(dataInfoList.length)
}
