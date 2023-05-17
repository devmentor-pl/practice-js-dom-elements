console.log('DOM')
const elWithTwoClasses = document.querySelectorAll('.comments__item.comments__item--newest');
console.log(elWithTwoClasses);
elWithTwoClasses.forEach(function (element) {
    const elNumber = element.querySelectorAll('[data-info]');
    console.log(`liczba elementów znalezionych: ${elNumber.length}`)
})