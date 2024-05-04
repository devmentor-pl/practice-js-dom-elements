console.log('DOM');

const curr = document.querySelector('.js-curr');

// this is for 05.05 - before new elements are added
// true - deep copy
const newArticle = curr.parentElement.cloneNode(true)

// 05.01
const deleteFromBasketButton = curr.cloneNode();
console.log(deleteFromBasketButton)

curr.parentElement.appendChild(deleteFromBasketButton)
deleteFromBasketButton.innerText = 'Usuń z koszyka'

// 05.02
for (const sibling of curr.parentElement.children) {
    if(sibling !== curr) {
        sibling.classList.add('sibling')
    }
}

// 05.03
const siblingArticle = curr.parentElement.nextElementSibling
siblingArticle.setAttribute('title', 'nextElementSibling')

// 05.04

const lastArticle = curr.parentElement.parentElement.lastElementChild
const newParagraph = document.createElement('p')
const buttonToReferTo = lastArticle.lastElementChild

lastArticle.insertBefore(newParagraph, buttonToReferTo)

// 05.05
curr.parentElement.parentElement.insertBefore(newArticle, curr.parentElement)