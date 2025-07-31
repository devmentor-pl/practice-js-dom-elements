console.log('DOM');

const curr = document.querySelector('.js-curr');

//1 

const newButton = document.createElement('button')
newButton.innerHTML = 'Usuń z koszyka'

curr.parentElement.appendChild(newButton)

//2

const children = Array.from(curr.parentElement.children)
console.log(children)
children.forEach(function(item){
    
    if(item !== curr){
        // console.log(item)
        item.classList.add('siblings')
    }
})

//3

const siblingElement = curr.parentElement.nextElementSibling
// console.log(siblingElement)
siblingElement.title = 'nextElementSibling'


//4

const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling
const button = lastArticle.children[lastArticle.children.length-1]
// console.log(button)

const pElement = document.createElement('p')
// pElement.innerText = 'Coś nowego'

lastArticle.insertBefore(pElement, button)


//5

const firstArticle = curr.parentElement //simple refactoring

const newArticleCloned = firstArticle.cloneNode(true)
firstArticle.parentElement.insertBefore(newArticleCloned, firstArticle)