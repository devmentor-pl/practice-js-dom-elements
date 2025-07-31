console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button')
newButton.innerText = 'usuń z koszyka'
curr.parentElement.appendChild(newButton)

const children = Array.from(curr.parentElement.children)
console.log(children)
children.forEach(function(item) {
    if(item !== curr)
    console.log(item)
    item.classList.add('siblings')
})

const siblingElement = curr.parentElement.nextElementSibling
siblingElement.title = 'nextElementSibling'

const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling
const btn = lastArticle.children[lastArticle.children.length -1]
const pElement = document.createElement('p')
pElement.innerText = 'Jakaś nowa treść'
lastArticle.insertBefore(pElement, btn)

const cloneArticle = curr.parentElement.cloneNode(true)
curr.parentElement.parentElement.insertBefore(cloneArticle, curr.parentElement)