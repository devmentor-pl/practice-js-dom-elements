console.log('DOM');

const curr = document.querySelector('.js-curr');
const btn = document.createElement('button');
curr.parentElement.appendChild(btn);
btn.textContent='usuń z koszyka';

const currParentChildren = curr.parentElement.children;
for(let i=0; i < currParentChildren.length; i++) {
    currParentChildren[0].classList.add = ('siblings');
}

const siblingArticle = curr.parentElement.nextElementSibling;
siblingArticle.setAttribute('title','nextElementSibling');

const lastArt = siblingArticle.parentElement.lastElementChild;
const extraParagraph = document.createElement('p');
lastArt.insertBefore(extraParagraph,lastArt.lastElementChild);  

const copyArt = siblingArticle.cloneNode(true);
siblingArticle.parentElement.insertBefore(copyArt,siblingArticle.parentElement.firstElementChild);






