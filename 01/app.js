console.log('DOM');

const commentsContainer = document.querySelector('.comments__item, .comments__item--newest')
console.log(commentsContainer)

if (commentsContainer) {
    const dataInfo = commentsContainer.querySelectorAll('[data-info]')
    console.log(dataInfo.length)
}