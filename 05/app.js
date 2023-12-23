console.log('DOM');

const curr = document.querySelector('.js-curr');

//1. Utworzenie i dodanie nowego przycisku
const newButton = document.createElement('button');
newButton.textContent = 'Usuń z koszyka';
curr.parentNode.appendChild(newButton);