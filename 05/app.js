console.log('DOM');

const curr = document.querySelector('.js-curr');
const article = curr.parentElement;

const brotherButton = document.createElement('button');
brotherButton.innerText = 'usuń z koszyka';
article.appendChild(brotherButton);

const articleChildrenList = Array.from(article.children);
const currSiblingsList = articleChildrenList;

currSiblingsList.forEach(function (element, index) {
  if ((element === curr)) {
    return currSiblingsList.splice(index, 1);
  }
});

const currSiblingsNumber = currSiblingsList.length;
console.log(currSiblingsNumber);

for (let i = 0; i < currSiblingsNumber; i++) {
  currSiblingsList[i].classList.add("siblings");
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