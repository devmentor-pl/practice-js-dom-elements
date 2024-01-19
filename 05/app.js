console.log('DOM');

const curr = document.querySelector('.js-curr');
const article = curr.parentElement;

const brotherButton = document.createElement('button');
brotherButton.innerText = 'usuń z koszyka';
article.appendChild(brotherButton);

const articleArray = article.children;
const articleLength = article.childElementCount;

for (let i = 0; i < articleLength; i ++) {
  articleArray[i].classList.add('siblings');
}

const siblingArticle = article.nextElementSibling;
siblingArticle.title = 'nextElementSibling';

const lastArticle = siblingArticle.nextElementSibling;
const lastButton = lastArticle.lastElementChild;
const additionalParagraph = document.createElement('p');
lastArticle.insertBefore(additionalParagraph, lastButton);

const section = article.parentElement;

const range = document.createRange();
const firstArticle = range.createContextualFragment(`
    <article class="articles__item article">
      <h1 class="article__title">Whateva</h1>
      <p class="article__description">Whateva</p>
      <button class="article__btn js-curr">Whateva</button>
    </article>
`);

section.insertBefore(firstArticle, article);