console.log('DOM');

const curr = document.querySelector('.js-curr');

//1
const button2 = document.createElement('button')
button2.innerText = 'Usuń z koszyka!'
curr.parentElement.appendChild(button2)
// const button3 = document.createElement('button')
// button3.innerText = 'Usuń z koszyka2!'
// curr.parentElement.appendChild(button3)
// const button4 = document.createElement('button')
// button4.innerText = 'Usuń z koszyka2!'
// curr.parentElement.appendChild(button4)

//2
let siblings = curr.nextElementSibling

while(siblings){
    siblings.setAttribute('class','siblings')
    siblings = siblings.nextElementSibling
    console.log(siblings)
}

//3