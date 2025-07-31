console.log('DOM');
const curr = document.querySelector('.js-curr');


const newButton = curr.cloneNode(true)
curr.parentElement.appendChild(newButton)
newButton.innerText = 'Usuń z koszyka'




const siblings = curr.parentElement.children;
const siblingsArray = Array.from(siblings)
siblingsArray.forEach((element) => {
element.classList.add('siblings')
})



const nextArticleElement = curr.parentElement.nextElementSibling
nextArticleElement.setAttribute(
    'title',
    'nextElementSibling'
)



const allArticles = curr.parentElement.parentElement
const lastChild = allArticles.lastElementChild
const buttonElement = lastChild.querySelector('button')
const newParagraph = document.createElement('p')
newParagraph.innerText = 'lorem ipsum'
lastChild.insertBefore(newParagraph, buttonElement)



const newArticle = curr.parentElement.cloneNode(true)
allArticles.insertBefore(newArticle, allArticles.firstElementChild)
