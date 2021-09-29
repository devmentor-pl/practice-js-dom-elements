const comments = document.querySelector('.comments__item.comments__item--newest');

console.log(comments);

if (comments) {
    const dataset = comments.querySelectorAll('[data-info]');

    dataset.forEach(function(el){
        console.log(el);
    });

}