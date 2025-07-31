console.log('DOM');

const curr = document.querySelector('.js-curr');

const btn = document.createElement('button');
curr.parentNode.appendChild(btn);
btn.textContent = 'usuń z koszyka';

const siblingList = [...curr.parentNode.children];
for (let i = 0; i < siblingList.length; i++) {
    if (siblingList[i] !== curr) {
        siblingList[i].classList.add('siblings');
    }
}

const article = curr.parentNode;
article.nextElementSibling.setAttribute('title', 'nextElementSibling');


const lastArticle = article.parentNode.lastElementChild;
const paragraph = document.createElement('p');
lastArticle.insertBefore(paragraph, lastArticle.lastElementChild);

const newArticle = lastArticle.cloneNode(true);
article.parentNode.insertBefore(newArticle, article)