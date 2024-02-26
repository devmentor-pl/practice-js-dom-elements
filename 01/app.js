console.log('DOM');

const element = document.querySelector('.comments__item.comments__item--newest');

if (element) {
    const howManyAttributes = element.querySelectorAll('[data-info]')
    console.log('Liczba elementów posiadających określony atrybut:', howManyAttributes.length)
} else {
    console.error('Brak takiego elementu');
}

