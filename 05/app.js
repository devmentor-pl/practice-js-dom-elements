console.log('DOM');

const curr = document.querySelector('.js-curr');
// console.log(curr);

// kolejny przycisk, który będzie rodzeństwem
const xBtn = curr.cloneNode(false);
xBtn.innerText = 'usun z koszyka'
const btnParent = curr.parentElement;
btnParent.appendChild(xBtn);


// rodzeństwem dla elementu o klasie `.js-curr` dodaj klasę `.siblings`
// (wykorzystaj pętlę). CZYLI h1 i p
const allChildren = [...btnParent.children];

allChildren.forEach(el => {
  el.classList.add('siblings');
});


// dla następnego elementu o klasie `.article` względem rodzica dla elementu o klasie `.js-curr` dodaj atrybut `title` o wartości `nextElementSibling`.
const currArticle = curr.parentElement;
const currentSection = currArticle.parentNode;

const lastArticle = currentSection.lastElementChild;
const lastBtn = lastArticle.lastElementChild;

const newP = document.createElement('p');
lastArticle.insertBefore(newP, lastBtn);


// dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.

const newArt = currArticle.cloneNode(true);
console.log(newArt);

currentSection.insertBefore(newArt, currArticle);
