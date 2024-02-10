console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
  // Task 1
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Usuń z koszyka';
  curr.parentElement.appendChild(removeBtn);

  // Task 2
  const currSiblings = [...curr.parentElement.children];
  console.log(currSiblings);

  currSiblings.forEach((el) => {
    if (el !== curr) {
      el.classList.add('siblings');
    }
  });

  // Task 3
  const nextSiblingArticle = curr.parentElement.nextElementSibling;
  if (nextSiblingArticle) {
    nextSiblingArticle.setAttribute('title', 'nextElementSibling');
  }

  // Task 4

  const newParagraph = document.createElement('p');
  newParagraph.innerText = 'lorem Ipsum';
  const lastArticleEl =
    curr.parentElement.nextElementSibling.nextElementSibling;
  if (lastArticleEl) {
    const lastArticleBtn =
      lastArticleEl.children[lastArticleEl.children.length - 1];
    lastArticleEl.insertBefore(newParagraph, lastArticleBtn);
  }

  // Task 5
  const sectionEl = curr.parentElement.parentElement;
  if (sectionEl) {
    const newArticle = curr.parentElement.nextElementSibling.cloneNode(true);
    sectionEl.insertBefore(newArticle, sectionEl.firstChild);
  }
}
