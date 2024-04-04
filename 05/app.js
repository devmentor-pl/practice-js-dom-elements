console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button');
newButton.innerText = 'Usuń z koszyka';

const article1 = curr.parentElement;

article1.appendChild(newButton)


