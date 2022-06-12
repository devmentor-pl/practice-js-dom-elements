console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1.

const btn = document.createElement('button');
const container = curr.parentElement;
btn.innerText = 'usuń z koszyka';
container.appendChild(btn);

// 2.

const children = Array.from(container.children);
children.forEach(function (element) {
    if (element !== curr) {
        element.className = element.className + ' siblings';
    };
});

// 3.

const article = container.nextElementSibling;
article.title = 'nextElementSibling';

// 4.

const lastArticle = container.parentElement.lastElementChild;
const button = lastArticle.lastElementChild;
const paragraph = document.createElement('p');

lastArticle.insertBefore(paragraph, button);

// 5.

const section = container.parentElement;
const firstArticle = section.firstElementChild;
const newArticle = firstArticle.cloneNode(true);

section.insertBefore(newArticle, firstArticle);