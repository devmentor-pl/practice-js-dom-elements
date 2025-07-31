console.log('DOM');

const curr = document.querySelector('.js-curr');

// --------------------------
// --------------------------

const cloneButton = curr.cloneNode(true);
cloneButton.innerHTML = 'Usuń z koszyka';

const currParent = curr.parentElement;
currParent.appendChild(cloneButton);

// --------------------------

const childrenOfCurrParent = currParent.children;

for (let i = 0; i < childrenOfCurrParent.length; i++) {

    if (!childrenOfCurrParent[i].className.includes('js-curr')) {
        childrenOfCurrParent[i].classList.add('siblings')
    }
}

// --------------------------

let getNextSiblingWithClass = function (element, selector) {
    let sibling = element.nextElementSibling;
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling
    }
}

const nextArt = getNextSiblingWithClass(currParent, 'article')
nextArt.setAttribute('title', 'nextElementSibling')

// --------------------------

const pEl = document.createElement('p');
pEl.innerText = 'HELLO WORLD';
pEl.style.fontSize = '40px';

const mainParent = currParent.parentElement
const lastArticle = mainParent.lastElementChild

const buttonInLastArticle = lastArticle.lastElementChild;
lastArticle.insertBefore(pEl, buttonInLastArticle)

// --------------------------

const getFirstArticle = currParent.cloneNode(true)
currParent.parentElement.insertBefore(getFirstArticle, currParent)

const clearText = getFirstArticle.children
for (i = 0; i < clearText.length; i++) {
    clearText[i].innerText = 'DELETE THIS TEXT IN JS TO CLEAR THIS PARAGRAPH'
}