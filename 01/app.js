console.log('DOM');

const elements = document.querySelectorAll('.comments__item.comments__item--newest');

if(elements.length > 0) {
  let count = 0

  elements.forEach(function(element) {
    const elementsWithDataInfo = element.querySelectorAll('[data-info]');
    count += elementsWithDataInfo.length;
  });
  console.log('Liczba znalezionych elementów:', count);
} else {
  console.log('Nie znaleziono elementów.')
}