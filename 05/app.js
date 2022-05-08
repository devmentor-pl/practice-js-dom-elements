console.log('DOM');

const curr = document.querySelector('.js-curr');

//1
const button2 = document.createElement('button')
button2.innerText = 'Usuń z koszyka!'
curr.parentElement.appendChild(button2)

//2
