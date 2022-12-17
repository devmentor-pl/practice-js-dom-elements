console.log('DOM');

const curr = document.querySelector('.js-curr');
const btnParent = curr.parentElement;
const btnBrother = document.createElement('button');

btnParent.appendChild(btnBrother)
btnBrother.innerText = 'usun z koszyka';

const btnSiblings = Array.from(btnParent.children);



btnSiblings.forEach(function (item) {

    item.classList.toggle('siblings');
});

const titleElement = btnParent.firstElementChild;


if (titleElement) {
    titleElement.setAttribute('title', 'nextElementSibling')
}

const btnGrandpa = btnParent.parentElement;
const lastArticle = btnGrandpa.lastElementChild;
const btn = lastArticle.lastElementChild;


const newP = document.createElement('p')
lastArticle.appendChild(newP);
lastArticle.insertBefore(newP, btn)
console.log(newP)

const firstArticle = btnParent.cloneNode(true);
btnGrandpa.insertBefore(firstArticle, btnParent)


