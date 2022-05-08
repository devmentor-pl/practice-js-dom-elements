console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;

//1
const button2 = document.createElement('button')
button2.innerText = 'Usuń z koszyka!'
currParent.appendChild(button2)
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
}

//3

const siblingsArticle = currParent.nextElementSibling

if(siblingsArticle.hasAttribute('class') && siblingsArticle.getAttribute('class').includes('article')){
    siblingsArticle.setAttribute('title', 'nextElementSibling')
} 

//4

const newP = document.createElement('p')
const lastArticle = currParent.parentElement.lastElementChild
const pInLastArticle = currParent.parentElement.lastElementChild.lastElementChild
lastArticle.insertBefore(newP, pInLastArticle)

//5

const cloneArticle = currParent.cloneNode(true)
currParent.parentElement.insertBefore(cloneArticle, currParent.parentElement.firstElementChild)