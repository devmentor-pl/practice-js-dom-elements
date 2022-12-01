console.log('DOM');

const curr = document.querySelector('.js-curr');
// --- 1
const deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Usuń z koszyka';
const firstArticle = curr.parentElement;
firstArticle.appendChild(deleteBtn);
// --- 2
const children = curr.parentElement.children;
for (let i = 0; i < children.length - 2; i++) {
	children[i].classList.add('siblings');
}
// --- 3
const secondArticle = curr.parentElement.nextElementSibling;
secondArticle.setAttribute('title', 'nextElementSibling');
// --- 4
const lastArticle = secondArticle.nextElementSibling;
const p = document.createElement('p');
const lastBtn = lastArticle.lastElementChild;
lastArticle.insertBefore(p, lastBtn);
// --- 5
const cloneArticle = secondArticle.cloneNode(true);
const grandPa = curr.parentElement.parentElement;
grandPa.insertBefore(cloneArticle, firstArticle);
