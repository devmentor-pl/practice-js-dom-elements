console.log('DOM');

const curr = document.querySelector('.js-curr');

const currSibling = document.createElement('button');
currSibling.textContent = 'usun z koszyka';
curr.insertAdjacentElement( 'afterend', currSibling);

let el = curr;
while(el){
    el = el.nextSibling;
    if(el?.classList !== undefined) el.classList.add('siblings');
}
//console.log(curr);
const parent = curr.parentElement;
//console.log(parent);
const nextAfterParent = parent.nextElementSibling;
nextAfterParent.setAttribute('title', 'nextElementSibling');
const main = parent.parentElement;
const lastChildInMain = main.lastElementChild;

const lastButton = lastChildInMain.lastElementChild;
const paragraph = document.createElement('p');
paragraph.textContent = 'This is additional paragraph';
lastButton.insertAdjacentElement('beforebegin', paragraph);

const article = document.createElement('article');
article.classList.add('articles__item', 'article');
const h1 = document.createElement('h1');
h1.classList.add('article__title');
h1.textContent = 'Added h1 in added article';
article.appendChild(h1);
const articleParagraph = document.createElement('p');
articleParagraph.classList.add('article__description');
articleParagraph.textContent = 'Some text in article paragraph';
article.appendChild(articleParagraph);
const articleButton = document.createElement('button');
articleButton.classList.add('article__btn');
articleButton.textContent = 'Kupuje';
article.appendChild(articleButton);


main.insertAdjacentElement('afterbegin', article);
//console.log(main);