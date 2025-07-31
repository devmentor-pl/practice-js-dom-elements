console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1 
const btnDelete = document.createElement('button');
btnDelete.innerText = 'Usuń z koszyka';

const articleEl = curr.parentElement;
articleEl.append(btnDelete);

// 2
let childrenElements = articleEl.children;

for (let i = 0; i < childrenElements.length; i++) {
  childrenElements[i].classList.add('siblings')

}

// 3
let articleNextSibling = articleEl.nextElementSibling;
let hasClassArticle = articleNextSibling.hasAttribute('class','article');
 if (articleNextSibling && hasClassArticle) {
  articleNextSibling.setAttribute('title','nextElementSibling');
 }

// 4
const sectionEl = articleEl.parentElement;
const lastSectionChild = sectionEl.lastElementChild;
const lastArticleChild = lastSectionChild.lastElementChild;

const pEl = document.createElement('p');
pEl.innerText = 'to ja, "p" element!'

lastSectionChild.insertBefore( pEl, lastArticleChild);

// 5
const cloneArticle = articleEl.cloneNode(true);
sectionEl.insertBefore( cloneArticle, articleEl);

console.log(sectionEl);