console.log('DOM');

const curr = document.querySelector('.js-curr');

const deleteFromBasketButton = curr.cloneNode();
console.log(deleteFromBasketButton)

curr.parentElement.appendChild(deleteFromBasketButton)
deleteFromBasketButton.innerText = 'Usuń z koszyka'