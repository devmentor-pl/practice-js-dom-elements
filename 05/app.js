console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement('button');
button.textContent = 'usuń z koszyka';
curr.appendChild(button);
