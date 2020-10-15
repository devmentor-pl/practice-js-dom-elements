console.log('DOM');

const commentsEl = document.querySelector('.comments__item, .comments__item--newest');

if (commentsEl) {
    const dataInfoArray = commentsEl.querySelectorAll('[data-info]');
    console.log('Ilość znalezionych elementów: ' + dataInfoArray.length);
}