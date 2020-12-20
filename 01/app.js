console.log('DOM');


const commentsElement = document.querySelector('.comments__item, .comments__item--newest ');


console.log(commentsElement);
if (commentsElement) {

    const elementList = commentsElement.querySelectorAll('[data-info]');

    console.log(elementList);

    console.log('Znaleziono: ' + elementList.length + ' elementy');


}
