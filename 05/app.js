const curr = document.querySelector('.js-curr');

const btn = document.createElement('button');
curr.parentNode.appendChild(btn);
btn.textContent = 'usuń z koszyka';

const childrenList = [...curr.parentNode.children];
for (let i = 0; i < childrenList.length; i++) {
    if (childrenList[i] !== curr) {
        childrenList[i].classList.add('siblings');
    }
}

const firstArticle = curr.parentNode;
firstArticle.nextElementSibling.setAttribute('title', 'nextElementSibling');


const lastArticle = firstArticle.parentNode.lastElementChild;
const newPar = document.createElement('p');
lastArticle.insertBefore(newPar, lastArticle.lastElementChild);

const newArticle = lastArticle.cloneNode(true);
firstArticle.parentNode.insertBefore(newArticle, firstArticle)