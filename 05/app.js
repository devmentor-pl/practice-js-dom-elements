console.log('DOM');

const curr = document.querySelector('.js-curr');
const parentEl = curr.parentElement;

// 1

const btnEl = document.createElement('button');
btnEl.textContent = 'Usuń z koszyka';
parentEl.appendChild(btnEl);

// 2

const siblings = parentEl.children;
const siblingsArr = Array.from(siblings);
siblingsArr.forEach(element => {
  if(!element.classList.contains('js-curr')) {
    element.classList.add('siblings');
  }
})

// 3

const nextArticle = parentEl.nextElementSibling;
nextArticle.setAttribute('title', 'nextElementSibling');

// 4

const sectionEl = parentEl.parentElement;
const pElement = document.createElement('p');
pElement.textContent = 'Nowy paragraf...';
const lastArticle = sectionEl.lastElementChild;
const lastButton = lastArticle.lastElementChild;
lastArticle.insertBefore(pElement, lastButton);

// 5

console.log(parentEl);
const secondArticle = parentEl.nextElementSibling;
const clonedArticle = secondArticle.cloneNode(true);
sectionEl.insertBefore(clonedArticle, parentEl);
