console.log('DOM');

const element = document.querySelector('.comments__item.comments__item--newest');
console.log(element); 

// Elementy, które posiadają atrybut data-info:

if(element) {
    const elementWithAttribute = element.querySelectorAll('[data-info]');
    console.log(elementWithAttribute, 'elementy z atrybutem data-info');
    
    console.log(elementWithAttribute.length, 'ilość elementów');
}