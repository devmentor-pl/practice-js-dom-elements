
const li = document.querySelector('.comments__item.comments__item--newest');

if (li) {
    const dataInfoElements = li.querySelectorAll('[data-info]');
    console.log(li.querySelectorAll('[data-info]'));
    console.log(`Liczba elementów z atrybutem data-info: ${dataInfoElements.length}`)
}
else {
    console.log('Nie znaleziono elementu');
}

