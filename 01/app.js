console.log('DOM');

let dataInfoCounter = 0;
const commentsItemElements = document.querySelector('.comments__item, .comments__item--newest');


const dataInfoElements = commentsItemElements.querySelectorAll('span');

for(let i = 0; i < dataInfoElements.length; i++){
    if(dataInfoElements[i].hasAttribute('data-info')){
        dataInfoCounter += 1;
    }
}

console.log('Ilość elementów ze znacznikiem "data-info" wynosi:  ' + dataInfoCounter);





