console.log('DOM');

const curr = document.querySelector('.js-curr');

// create new btn el.
const btn = document.createElement('button');
btn.innerText = 'usuń z koszyka';
// add new btn el after old one
curr.insertAdjacentElement('afterend', btn);
//  add className to siblings node
const parentElement = [...curr.parentElement.children];
parentElement.forEach(function (el) {
    if (!el.classList.contains('js-curr')) {
        el.classList.add('siblings');
    };
});
// add attr to curr parent sibling
curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');

// add paragraph to the last article before button
const lastArticleChild = curr.parentElement.nextElementSibling.nextElementSibling.lastElementChild;
const p = document.createElement('p');
lastArticleChild.insertAdjacentElement('beforebegin', p);

const newArticle = curr.parentElement.cloneNode(true)
newArticle.lastElementChild.remove()
newArticle.lastElementChild.classList.remove('js-curr')
curr.parentElement.insertAdjacentElement('beforebegin', newArticle);


