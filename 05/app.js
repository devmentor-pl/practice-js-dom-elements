console.log('DOM');

const curr = document.querySelector('.js-curr');
// 1.
const newButton = document.createElement('button')
newButton.textContent = 'Usuń z koszyka'
const domArticle = curr.parentElement
domArticle.append(newButton)
// 2.
const domChild = domArticle.children
for (let i=0;i<domChild.length;i++)
    if (!domChild[i].className.includes('js-curr'))
        domChild[i].classList.add('siblings')
// 3.        
const eventsArticle = domArticle.nextElementSibling
eventsArticle.title = 'nextElementSibling'
// 4.
const formsArticle = eventsArticle.nextElementSibling
const formsButton = formsArticle.lastElementChild
const formsP = document.createElement('p')
formsArticle.insertBefore(formsP,formsButton)   
// 5. 
const articles = formsArticle.parentElement
const articleClone = formsArticle.cloneNode(true) 
articles.insertBefore(articleClone,domArticle)
