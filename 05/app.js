console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button')

newButton.innerText = 'Usuń z koszyka!'

curr.parentElement.appendChild(newButton)


const children = Array.from(curr.parentElement.children)
console.log(children)

children.forEach(function(item) {
   
    if(item !== curr) {
        item.classList.add('siblings')
} 
})

const siblingElement = curr.parentElement.nextElementSibling
siblingElement.title = 'nextElementSibling'

const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling
const button = lastArticle.children[lastArticle.children.length -1]
console.log (button)

const pElement = document.createElement('p')
pElement.innerText = 'Lorem....'

lastArticle.insertBefore(pElement, button)

const firstArticle = curr.parentElement
const newArticle = firstArticle.cloneNode(true)
firstArticle.parentElement.insertBefore(newArticle, firstArticle)