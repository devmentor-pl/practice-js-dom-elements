console.log('DOM');

const element = document.querySelector('.comments__item.comments__item--newest');

if (element){
    const elementsWithAtribute = element.querySelectorAll('[data-info]');
    console.log(elementsWithAtribute);
    console.log(`Znaleziono ${elementsWithAtribute.length} elementy z podanym atrybutem`);
    
} else {
    console.log(`Nie znaleziono elementu o podanej klasie`);
}
