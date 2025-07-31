console.log('DOM');

const liElement = document.getElementsByClassName('comments__item comments__item--newest')[0];
if(liElement.hasChildNodes()) {
    const liChildrens = [...liElement.children];
    const dataInfoElements = liChildrens.map(function(element) {
        return element.querySelector('span').hasAttribute('data-info');
    });
    console.log(dataInfoElements);
    console.log(dataInfoElements.length);
}


