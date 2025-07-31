console.log('DOM');

const curr = document.querySelector('.js-curr');
const button = document.createElement('button');
button.innerText = 'usuń z koszyka';
curr.parentElement.appendChild(button);

const parent = curr.parentElement;
const children = parent.children;

for (let i = 0; i < children.length; i++) {
  if (children[i] !== curr) {
    children[i].classList.add('siblings');
  }
}

const nextArticle = parent.nextElementSibling;
if (nextArticle && nextArticle.classList.contains('article')) {
  nextArticle.setAttribute('title', 'nextElementSibling');
}

const articles = document.querySelectorAll('.article');
const lastArticle = articles[articles.length - 1];
const lastButton = lastArticle.querySelector('button');
const newParagraph = document.createElement('p');
newParagraph.innerText = 'Nowy paragraf przed przyciskiem';

lastArticle.insertBefore(newParagraph, lastButton);

const newArticle = document.createElement('article');
newArticle.classList.add('articles__item', 'article');

const newTitle = document.createElement('h1');
newTitle.classList.add('article__title');
newTitle.innerText = 'Nowy artykuł';

const newDescription = document.createElement('p');
newDescription.classList.add('article__description');
newDescription.innerText = 'Nowy opis';

const newButton = document.createElement('button');
newButton.classList.add('article__btn');
newButton.innerText = 'Nowy przycisk';

newArticle.appendChild(newTitle);
newArticle.appendChild(newDescription);
newArticle.appendChild(newButton);


const articlesContainer = document.querySelector('.articles');

articlesContainer.insertBefore(newArticle, articlesContainer.firstChild);
