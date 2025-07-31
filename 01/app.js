console.log('DOM');

const commentsElements = document.querySelector('.comments__item.comments__item--newest');
if(commentsElements) {
    const dataInfoEl = commentsElements.querySelectorAll('[data-info]');
    console.log(dataInfoEl.length);
}

