console.log('DOM');

const curr = document.querySelector('.js-curr');

const deleteFromBasketButton = curr.cloneNode();
console.log(deleteFromBasketButton)

curr.parentElement.appendChild(deleteFromBasketButton)
deleteFromBasketButton.innerText = 'Usuń z koszyka'

for (const sibling of curr.parentElement.children) {
    if(sibling !== curr) {
        sibling.classList.add('sibling')
    }
}

const siblingArticle = curr.parentElement.nextElementSibling
siblingArticle.setAttribute('title', 'nextElementSibling')

const lastArticle = curr.parentElement.parentElement.lastElementChild
const newParagraph = document.createElement('p')
const buttonToReferTo = lastArticle.lastElementChild

lastArticle.insertBefore(newParagraph, buttonToReferTo)