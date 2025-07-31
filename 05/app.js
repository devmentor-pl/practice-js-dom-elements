console.log('DOM');

const curr = document.querySelector('.js-curr');

//Zadanie 1

const button = document.createElement('button');
const parent = curr.parentElement;
parent.appendChild(button);
button.innerText = 'Usuń z koszyka';

//Zadanie 2

const allChildren = parent.children;

for(let i=0; i<allChildren.length; i ++) {
    if(allChildren[i] !== curr) {
        allChildren[i].classList.add('siblings');
    }
}

//Zadanie 3

const firstChild = parent.firstElementChild;
firstChild.setAttribute('title', 'nextElementSibling');

//Zadanie 4

const newParagraph = document.createElement('p');
const mainParent = parent.parentElement;
const lastArticle = mainParent.lastElementChild;
const lastButton = lastArticle.querySelector('button');

lastArticle.insertBefore(newParagraph, lastButton);

// Zadanie 5  
const newArticle = lastArticle.cloneNode(true);
const firstArticle = mainParent.firstElementChild;
mainParent.insertBefore(newArticle, firstArticle);
console.log(mainParent);







