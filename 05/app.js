console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement('button')
button.innerText = 'Usuń z koszyka'

const parentCurrElement = curr.parentElement
parentCurrElement.appendChild(button)

const children = Array.from(parentCurrElement.children)
children.forEach(function (item) {
    if (item !== curr) {
        item.classList.add('siblings')
    }
});

const nextSiblOfParentCurrElement = parentCurrElement.nextElementSibling

if (nextSiblOfParentCurrElement.className.includes('article')) {
    nextSiblOfParentCurrElement.setAttribute('title', 'nextElementSibling')
}

const section = document.querySelector('section')
const lastArticle = section.lastElementChild

const lastButton = lastArticle.querySelector('button')
const pElementSecond = document.createElement('p')

lastArticle.insertBefore(pElementSecond, lastButton)

const article = document.querySelector('.article')

newArticle = article.cloneNode(true)
section.appendChild(newArticle)
