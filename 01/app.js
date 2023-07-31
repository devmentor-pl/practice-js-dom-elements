console.log('DOM');

const commentLi = document.querySelector('.comments__item.comments__item--newest');

if (commentLi) {
    const dataSpan = commentList.querySelectorAll('[data-info]');
    console.log(`ilość elementów z atrybutem dataset = ${dataSpan.length}`)
}