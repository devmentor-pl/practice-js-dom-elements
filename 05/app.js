console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1.

const newButton = document.createElement('button')
newButton.innerText = 'Usuń z koszyka'

curr.parentElement.appendChild(newButton)

// 2.

const list = curr.parentElement.children
const arr = Array.from(list)

arr.forEach(function(item){
    item.classList.add('.siblings')
})

// 3.
const article = curr.parentElement.nextElementSibling
article.setAttribute('title', 'nextElementSibling')

// 4.
const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling
const p = document.createElement('p')
p.innerText = 'HALO TU JESTEM'

lastArticle.insertBefore(p, lastArticle.lastElementChild)

// 5.
const newArticle = curr.parentElement.cloneNode(true)
article.parentElement.insertBefore(newArticle, article);