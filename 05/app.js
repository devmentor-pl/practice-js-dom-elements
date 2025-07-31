console.log('DOM');

const curr = document.querySelector('.js-curr');
// const newButton = curr.cloneNode(true)
const newButton = document.createElement('button')
currParent = curr.parentElement
currParent.appendChild(newButton)
newButton.textContent = 'Usuń z koszyka'


const currSiblings = (function () {
    const currParentChildren = curr.parentElement.children
    let currSiblings = []
    for (let i = 0; i < currParentChildren.length; i++) {
        if (currParentChildren[i] !== curr) {
            const currParentChild = currParentChildren[i]
            currSiblings[i] = currParentChild
        }
    }
    for (let i = 0; i < currParentChildren.length; i++) {
        if (currParentChildren[i] === curr) {
            currSiblings.splice(i, 1)
        }
    }
    return currSiblings
})()

for (let i = 0; i < currSiblings.length; i++) {
    currSiblings[i].classList.add('siblings')
}
currParent.nextElementSibling.title = 'nextElementSibling'

const lastArticle = currParent.nextElementSibling.nextElementSibling
const lastArtButton = lastArticle.children[lastArticle.children.length - 1]
const pElement = document.createElement('p')
lastArticle.insertBefore(pElement, lastArtButton)

newArticle = currParent.cloneNode(true)
currParent.parentElement.insertBefore(newArticle, currParent.parentElement.firstChild)
