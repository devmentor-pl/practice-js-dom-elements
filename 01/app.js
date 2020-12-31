const commentsList = document.querySelector('.comments__item.comments__item--newest');


if(commentsList) {
    const commentItem = commentsList.querySelectorAll('[data-info]');
    
    console.log(`Zostalo znalezione. ${commentItem.length} elementow.`);
}
