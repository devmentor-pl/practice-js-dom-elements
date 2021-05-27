console.log('DOM');

const curr = document.querySelector('.js-curr');
const btn = document.createElement('button');
const article = curr.parentElement;
article.appendChild(btn);
btn.textContent = 'Usuń z koszyka';

for (let i = 0; i < article.children.length; i++) {
article.children[i].className = 'siblings';
}

article.nextElementSibling.setAttribute('title', 'nextElementSibling');

const articles = article.parentElement;
const p = document.createElement('p');
p.textContent = 'lalala';
const btn2 = articles.lastElementChild.lastElementChild;
articles.lastElementChild.insertBefore(p, btn2);

console.log(article.getAttribute('.article__title'));
const newArticle = article.cloneNode(true);
articles.insertBefore(newArticle, article);

/* zadania były rewelacyjne! dużo się nauczyłem */
