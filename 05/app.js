console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button');
newButton.textContent = 'Usuń z koszyka';
const article = curr.parentElement;
article.append(newButton);

const child = domArticle.children;

