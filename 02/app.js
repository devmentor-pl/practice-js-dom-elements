console.log('DOM');

const elementList = document.querySelectorAll('[data-url]');

console.log(elementList);

const aElement = document.querySelectorAll('a');

console.log(aElement);


/* Lepsze rozwiązanie + dodatek */

for (let i = 0, j = 0; i < elementList.length, j < aElement.length; i++, j++) {

    if (aElement[j].hasAttribute('data-url')) {
        const attributeDataUrl = elementList[i].getAttribute('data-url');
        aElement[j].setAttribute('href', attributeDataUrl);
        aElement[j].setAttribute('target', '_blank');
    }

}



/* Drugie gorsze rozwiązanie (więcej kodu napisane) */

/*
const arrAttributeDataUrl = [];
for (let i = 0; i < elementList.length; i++) {
    if (elementList[i].hasAttribute('data-url')) {

        arrAttributeDataUrl[i] = elementList[i].getAttribute('data-url');

    }

}
console.log(arrAttributeDataUrl);

for (let j = 0; j < aElement.length; j++) {
    if (aElement[j].hasAttribute('data-url')) {
        aElement[j].setAttribute('href', arrAttributeDataUrl[j]);
    }

}
*/
