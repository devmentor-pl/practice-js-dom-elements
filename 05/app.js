'use strict';

const curr = document.querySelector('.js-curr');
if (curr) {
  // Create delete button
  const deleteButton = curr.parentElement;
  const newDeleteButton = document.createElement('button');
  newDeleteButton.textContent = 'Usuń z koszyka';
  deleteButton.appendChild(newDeleteButton);

  // add "siblings" class
  const currSiblings = curr.parentElement.children;
  for (let i = 0; i < currSiblings.length; i++) {
    const el = currSiblings[i];
    el.classList.add('siblings');
  }

  // add "nextElementSibling" title
  const currNextParentEle = curr.parentElement.nextElementSibling;
  currNextParentEle.setAttribute('title', 'nextElementSibling');

  // Last article paragraph
  const articleSection = curr.closest('.articles');
  const lastArticleEle = articleSection.lastElementChild;
  const newP = document.createElement('p');
  newP.innerText = 'Tutaj jestem! 🎁';
  const lastArticleBtn = lastArticleEle.lastElementChild;

  lastArticleEle.insertBefore(newP, lastArticleBtn);

  // First list article
  const originalNode = curr.closest('article');
  const cloneNode = originalNode.cloneNode(true);
  originalNode.appendChild(cloneNode);
}
