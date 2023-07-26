console.log('DOM');

const commentList = document.querySelector('.comments__item.comments__item--newest');

if (commentList) {
    const dataSpan = commentList.querySelectorAll('[data-info]');
    console.log(`ilość elementów z atrybutem dataset = ${dataSpan.length}`)
}