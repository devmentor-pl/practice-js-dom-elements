console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1
const currParent = curr.parentElement;
const newButton = document.createElement('button');
newButton.innerText = 'usuń z koszyka'
currParent.appendChild(newButton);

// 2
const currSiblings = Array.from(currParent.children);
currSiblings.filter((el) => !el.classList.contains('js-curr')).forEach(el => el.classList.add('siblings'));

// 3
currParent.nextElementSibling.setAttribute('title', 'nextElementSibling');

// 4
const lastSibling = currParent.parentElement.lastElementChild;
const pElement = document.createElement('p');

lastSibling.insertBefore(pElement, lastSibling.lastElementChild);


// 5
const newArticle = document.createElement('article');

const articles = currParent.parentElement;
console.log(articles);

articles.insertBefore(newArticle, currParent);
newArticle.classList.add('articles__item', 'article');

const newTitle = document.createElement('h1')
const newParagraph = document.createElement('p');
const newBtn = document.createElement('button');

newTitle.innerText = 'JS - New Article';
newParagraph.innerText = 'Lorem test';
newBtn.innerText = 'new btn'

newTitle.classList.add('article__title');
newParagraph.classList.add('article__description');
newBtn.classList.add('article__btn');

newArticle.appendChild(newTitle);
newArticle.appendChild(newParagraph);
newArticle.appendChild(newBtn);


