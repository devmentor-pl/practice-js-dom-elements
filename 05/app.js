console.log('DOM');

const curr = document.querySelector('.js-curr');

// Task 1
const removeBtn = document.createElement('button');
removeBtn.innerText = 'Usuń z koszyka';
curr.parentElement.appendChild(removeBtn);

// Task 2
const currSiblings = [...curr.parentElement.children];
currSiblings.forEach((el) => {
  el.classList.add('siblings');
});
// Task 3
curr.parentElement.nextElementSibling.setAttribute(
  'title',
  'nextElementSibling'
);

// Task 4
const newParagraph = document.createElement('p');
newParagraph.innerText = 'lorem Ipsum';
const lastArticleEl = curr.parentElement.nextElementSibling.nextElementSibling;
const lastArticleBtn =
  lastArticleEl.children[lastArticleEl.children.length - 1];
lastArticleEl.insertBefore(newParagraph, lastArticleBtn);

// Task 5
const sectionEl = curr.parentElement.parentElement;
const newArticle = curr.parentElement.cloneNode(true);
sectionEl.insertBefore(newArticle, sectionEl.firstChild);
