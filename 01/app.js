console.log('DOM');

const newestComment = document.querySelector('.comments__item.comments__item--newest');

if (newestComment) {
    const elementsWithDataInfo = newestComment.querySelectorAll('[data-info]');

    console.log('Liczba elementów z atrybutem data-info:', elementsWithDataInfo.length);
} else {
    console.log('Nie znaleziono elementu o klasach .comments__item.comments__item--newest');
}