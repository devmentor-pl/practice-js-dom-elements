const curr = document.querySelector('.js-curr')

const currParent = curr.parentElement
const btn = document.createElement('button')

const newBtn = curr.parentElement.appendChild(btn)

newBtn.innerHTML = 'Usun z koszyka'

let previousSibling = newBtn.previousElementSibling


while (previousSibling) {
    previousSibling.classList.add('siblings')
    previousSibling = previousSibling.previousElementSibling
  }

currParent.nextElementSibling.dataset.title = 'nextElementSibling'

const section = currParent.parentElement

const newParagraph = document.createElement('p')

const lastArticle = section.lastElementChild

const lastArticleBtn = lastArticle.lastElementChild

lastArticle.insertBefore(newParagraph, lastArticleBtn)

const sectionfirstChild = section.firstChild

const clonedArticle = currParent.cloneNode(true)

section.insertBefore(clonedArticle, sectionfirstChild)

console.log(section)








            





