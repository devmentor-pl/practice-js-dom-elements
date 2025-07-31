console.log('DOM');

const comment = document.querySelector('.comments__item.comments__item--newest');
console.log(comment);
if(comment) {
   const dataset = comment.querySelectorAll('[data-info]')
    console.log('Liczba elementów z atrybutem data-info: ' + dataset.length);
}
