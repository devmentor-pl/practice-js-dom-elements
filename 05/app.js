console.log('DOM');

const curr = document.querySelector('.js-curr');
if(curr) {
    const buttonsParent = curr.parentElement
    const nextButton = document.createElement('button');

    nextButton.innerText = 'Usuń z koszyka'

    buttonsParent.appendChild(nextButton);

    for(let i = 0; i < buttonsParent.children.length; i++) {
        if(buttonsParent.children[i] !== curr) {
            buttonsParent.children[i].classList.add('.siblings')
        }
    }

    buttonsParent.nextElementSibling.setAttribute('title', 'nextElementSibling')

    const buttonsParentParent = buttonsParent.parentElement
    const lastArticle = buttonsParentParent.lastElementChild
    const lastButton = lastArticle.querySelector('button')
    const pEl = document.createElement('p')

    pEl.innerText = 'Paragraf przed buttonem'
    lastArticle.insertBefore(pEl, lastButton)


    const article = buttonsParentParent.querySelector('article')
    const newArticle = article.cloneNode(true)

    buttonsParentParent.insertBefore(newArticle, buttonsParentParent.firstElementChild)



}
