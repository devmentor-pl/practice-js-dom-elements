console.log('DOM');

const curr = document.querySelector('.js-curr');

//1.

const newButton = document.createElement('button')
const buttonParent = curr.parentElement

buttonParent.appendChild(newButton)
newButton.textContent = 'Usuń z koszyka'

//2.

const children = curr.parentElement.children

for(let i = 0; i < children.length; i++){
    children[i].classList.add('siblings')
}

//3.

const nextArticleElement = curr.parentElement.nextElementSibling
nextArticleElement.setAttribute('title', 'nextElementSibling')

//4.

const lastArticleElement = nextArticleElement.nextElementSibling
const lastButton = lastArticleElement.lastElementChild

const newParagraph = document.createElement('p')
lastArticleElement.insertBefore(newParagraph, lastButton)

//5.

const articleElement = curr.parentElement
const sectionElement = articleElement.parentElement
const newArticleElement = articleElement.cloneNode(true)

newArticleElement.firstElementChild.textContent = 'New Article'

sectionElement.insertBefore(newArticleElement, articleElement)






