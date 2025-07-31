const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;

const btn = document.createElement('button');
btn.innerText = 'usuń z koszyka';
currParent.appendChild(btn);

const childrenList = currParent.children;
for (let i = 0; i < childrenList.length; i++) {
    if (!childrenList[i].classList.contains('js-curr')) {
        childrenList[i].classList.add('siblings');
    }
}

currParent.nextElementSibling.setAttribute('title', 'nexElementSibling');

const lastArticle = currParent.parentElement.lastElementChild;
const paragraph = document.createElement('p');
paragraph.innerText = 'Test';
const lastArticleBtn = lastArticle.lastElementChild;
lastArticle.insertBefore(paragraph, lastArticleBtn);

const firstArticle = lastArticle.cloneNode(true);
currParent.parentElement.insertBefore(firstArticle, currParent);