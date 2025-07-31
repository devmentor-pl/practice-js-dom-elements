console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1

const newButton = document.createElement('button');
newButton.textContent = 'Usuń z koszyka'
curr.parentElement.appendChild(newButton);

// 2

const siblings = curr.parentElement.children;
for (const sibling of siblings) {
  if (sibling !== curr) {
    sibling.classList.add('siblings');
  }
}

// 3

const nextArticle = curr.parentElement.nextElementSibling;
if (nextArticle && nextArticle.classList.contains('article')) {
  nextArticle.setAttribute('title', 'nextElementSibling');
}

// 4

const lastArticle = document.querySelector('.articles__item:last-child');
const newParagraph = document.createElement('p');
const lastButton = lastArticle.querySelector('.article__btn');
lastArticle.insertBefore(newParagraph, lastButton.previousElementSibling);

// 5

const newArticle = curr.parentElement.cloneNode(true);
const articlesParent = curr.parentElement.parentElement;
articlesParent.insertBefore(newArticle, curr.parentElement);