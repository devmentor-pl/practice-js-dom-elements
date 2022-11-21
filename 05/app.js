console.log('DOM');

const curr = document.querySelector('.js-curr');
const articleEl1 = document.querySelector('.articles__item');
const newBtn = document.createElement('button');

articleEl1.appendChild(newBtn)
newBtn.innerText = "Usuń z koszyka"

const articles = document.querySelectorAll('.articles__item');
const array = [...articles];

array.forEach(function(item) {
    item.classList.add('siblings');
})

const articleEl2 = curr.parentNode;
articleEl2.nextElementSibling.setAttribute('title' , 'nextElementSibling');

const articleEl3 = articleEl1.nextElementSibling;
const articleEl4 = articleEl3.nextElementSibling;
const oldBtn = articleEl4.querySelector('button');

const newParagraph = document.createElement('p');
newParagraph.classList.add('new-paragraph');
newParagraph.textContent = 'This is the new paragraph';
oldBtn = articleEl4.insertBefore(newParagraph, oldBtn);

const newArticleEl = articleEl1.cloneNode(true);
articles.appendChild(newArticleEl);
articles.insertBefore(newArticleEl, articleEl1);

