console.log('DOM');

const curr = document.querySelector('.js-curr');
const btn = document.createElement('button')

curr.parentElement.append(btn)

btn.textContent = 'usun z koszyka'

const children = Array.from(curr.parentElement.children)

children.forEach(function(item) {
    if (item !== curr) {
        item.classList.add('siblings')
    }
} );




const siblingElement = curr.parentElement.nextElementSibling

siblingElement.setAttribute('title', ' nextElementSibling')

const LastArticle = curr.parentElement.nextElementSibling.nextElementSibling

const btnTwo = LastArticle.children[LastArticle.children.length -1]

const pElement = document.createElement('p')
pElement.textContent = 'tu jest ten paragraf'
LastArticle.insertBefore(pElement, btnTwo)

const newArticle = curr.parentElement.cloneNode(true)
curr.parentElement.parentElement.insertBefore(newArticle, curr.parentElement)
