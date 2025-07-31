console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
    const articleParent = curr.parentElement

    // 1
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "Usuń z koszyka"
    articleParent.appendChild(deleteButton)

    // 2
    const articleElChildren = articleParent.children
    const siblings = [...articleElChildren].filter(item => !item.classList.contains('js-curr'))

    for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.add('siblings')
    }

    // 3
    const secondArticle = articleParent.nextElementSibling
    if (secondArticle) {
        secondArticle.setAttribute('title', 'nextElementSibling')
    }

    // 4
    const sectionParent = articleParent.parentElement
    const lastSectionChild = sectionParent.lastElementChild
    const buttonChild = lastSectionChild.lastElementChild

    const newParagraph = document.createElement("p")

    newParagraph.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis doloremque, exercitationem aliquid itaque atque maxime nisi asperiores! Vel, dignissimos sequi rem officiis voluptatibus officia iste temporibus aperiam, voluptatem nam ex.'

    lastSectionChild.insertBefore(newParagraph, buttonChild)

    // 5
    const newArticle = articleParent.cloneNode(true)

    sectionParent.insertBefore(newArticle, articleParent)
}