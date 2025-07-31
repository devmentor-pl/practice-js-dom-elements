console.log('DOM');

const curr = document.querySelector('.js-curr');
const nextCurr = curr.cloneNode(1);
nextCurr.textContent = 'Usuń z koszyka'; //zad 1
curr.insertAdjacentElement('afterend', nextCurr);

const siblings = curr.parentElement.children;
for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] !== curr) {
        siblings[i].classList.add('siblings');
    }
} //zad 2?

curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling'); //zad 3


const newP = document.createElement('p');
newP.textContent = 'Nowy paragraf';

let lastArticle = curr.parentElement;

while(lastArticle.nextElementSibling){
    lastArticle = lastArticle.nextElementSibling;
}

const lastBtn = lastArticle.querySelector('button');
lastArticle.insertBefore(newP, lastBtn); // zad 4



const cloneArticle = curr.parentElement.cloneNode(1);
const spaceForNewArticle = curr.parentElement.parentElement; 
console.log(cloneArticle);

spaceForNewArticle.insertBefore(cloneArticle, spaceForNewArticle.firstElementChild); //zad 5