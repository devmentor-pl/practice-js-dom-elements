const comment = document.querySelector('.comments__item.comments__item--newest');

console.log(comment);

if (comment) {
    const dataset = comment.querySelectorAll('[data-info]');

    console.log(dataset.length);

    dataset.forEach(function(el){
        console.log(el);
    });

}