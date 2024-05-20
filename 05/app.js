console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;

// #1
const newButton = document.createElement('button');
newButton.textContent = 'usuń z koszyka';
currParent.appendChild(newButton);

// #2

const currSiblings = currParent.children;

for (let i = 0; i < currSiblings.length; i++) {
    const sibling = currSiblings[i];
    if(currSiblings[i] !== curr){
        sibling.classList.add('siblings');
    }
}

// #3

const nextArticle = currParent.nextElementSibling

if (nextArticle) {
    nextArticle.setAttribute('title', 'nextElementSibling');
}

// #4

const articleParent = currParent.parentElement
const lastArticle = articleParent.lastElementChild

const lastArticleParagraph = document.createElement('p');
lastArticleParagraph.textContent = 'New paragraph text'

const buttonElement = lastArticle.lastElementChild
lastArticle.insertBefore(lastArticleParagraph, buttonElement);

// #5

const newArticle = document.createElement('article');
newArticle.classList.add('articles__item', 'article');
articleParent.appendChild(newArticle);
articleParent.insertBefore(newArticle, currParent);

const newH1 = document.createElement('h1');
newH1.classList.add('article__title');
newH1.innerText = 'This is new article h1 element';
newArticle.appendChild(newH1);

const newParagraph = document.createElement('p');
newParagraph.classList.add('article__description');
newParagraph.innerText = 'Some text inside new paragraph'
newArticle.appendChild(newParagraph);

const newArticleButton = document.createElement('button');
newArticleButton.classList.add('article__btn');
newArticleButton.innerText = 'Kupuję!';
newArticle.appendChild(newArticleButton);