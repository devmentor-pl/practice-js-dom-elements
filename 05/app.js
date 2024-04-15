console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;
const currGrandParent = currParent.parentElement;

const siblingButton = document.createElement('button');
siblingButton.innerText = 'Usuń z koszyka';
currParent.appendChild(siblingButton);

console.log(currParent);
console.log(currGrandParent);