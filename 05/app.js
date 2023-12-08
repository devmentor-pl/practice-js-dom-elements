console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button')
newButton.textContent = 'Usuń z koszyka'
const domArticle = curr.parentElement
domArticle.append(newButton)

const domChild = domArticle.children
for (let i=0;i<domChild.length;i++)
    if (!domChild[i].className.includes('js-curr'))
        domChild[i].classList.add('siblings')
   
const eventsArticle = domArticle.nextElementSibling
eventsArticle.title = 'nextElementSibling'

const formsArticle = eventsArticle.nextElementSibling
const buttonForm = formsArticle.lastElementChild
const newPar = document.createElement('p')
formsArticle.insertBefore(newPar,buttonForm)     

const articles = formsArticle.parentElement
const articleClone = formsArticle.cloneNode(true) 
articles.insertBefore(articleClone,domArticle)
