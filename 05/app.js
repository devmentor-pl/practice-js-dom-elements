console.log('DOM');

const curr = document.querySelector('.js-curr');

// zadanie 1
const btn = document.createElement('button');
btn.innerText = 'Usuń z koszyka';
curr.parentElement.appendChild(btn);

//zadanie 2

const children = curr.parentElement.children;

for (let i = 0; i < children.length; i++) {
    if (children[i] !== curr) {
        children[i].classList.add('siblings');
    }
}
const sibling = curr.parentElement.nextElementSibling;

sibling.setAttribute('title', 'nextElementSibling');


//zadanie 03
const paragraph = document.createElement('p');
const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling;
const btn2 = curr.parentElement.nextElementSibling.nextElementSibling.children[2];

lastArticle.insertBefore(paragraph, btn2);

// lastArticle.children[2].appendChild(paragraph);

//zadanie 04
// const article = curr.parentElement.parentElement;
// const artNew = curr.parentElement;
// const cloneArt = article.cloneNode(true);

// article.insertBefore(cloneArt, artNew.firstElementChild);

const mainSec = curr.parentElement.parentElement;
const article = curr.parentElement;
const cloneArt = article.cloneNode(true);

mainSec.insertBefore(cloneArt, article.previousSibling);