console.log('DOM');

const dualClassList = [...document.querySelectorAll('.comments__item.comments__item--newest')];
let number = 0;

dualClassList.forEach(function(element) {
    const subArray = [...element.querySelectorAll('*')];

    subArray.forEach(function(element) {
        if(element.hasAttribute('data-info')) {
            number++;
        }
    })
})

console.log('Znaleziono', number, 'znacznikow z atrybutem data-info.');