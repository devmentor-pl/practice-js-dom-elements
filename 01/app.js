console.log('DOM');

const elementsWithComments = document.getElementsByClassName('comments__item'&&`comments__item--newest`);

for(let i=0;i<elementsWithComments.length;i++){
   console.log(elementsWithComments[i].hasAttribute('data-info'));
}



