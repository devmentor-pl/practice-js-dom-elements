console.log('DOM');

const curr = document.querySelector('.js-curr');

// zadanie nr 1
const newButton = document.createElement('button')
newButton.innerText = 'usuń z koszyka'
curr.parentElement.appendChild(newButton)

// zadanie nr 2
const siblingsList = Array.from(curr.parentElement.children)
console.log(siblingsList)
siblingsList.forEach(function(item) {
    if(item !== curr) {
        item.classList.add('siblings')
    }
})

// zadanie nr 3
const nextArticle = curr.parentElement.nextElementSibling
nextArticle.setAttribute('title', 'nextElementSibling')

// zadanie nr 4
const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling
const newParagraf = document.createElement('p')
const button = lastArticle.lastElementChild
lastArticle.insertBefore(newParagraf, button)
newParagraf.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.'

// zadanie nr 5
const currParent = curr.parentElement
const firstArticle = currParent.cloneNode(true)
currParent.parentElement.insertBefore(firstArticle, currParent)