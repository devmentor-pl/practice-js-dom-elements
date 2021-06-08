console.log('DOM');

const curr = document.querySelector('.js-curr');

// Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej `curr` elementu. Element ten niech zawiera napis `usuń z koszyka`.

const btnEl = document.createElement('button');
btnEl.textContent = 'Usuń z koszyka';
curr.insertAdjacentElement('afterend', btnEl);

const parentEl = curr.parentElement
const childrenElements = parentEl.children;

// dla wszystkich elementów, które są rodzeństwem dla elementu o klasie `.js-curr` dodaj klasę `.siblings` (wykorzystaj pętlę)

[...childrenElements].forEach(function(el){
    el.classList.add('siblings');
    console.log(el);
});


// dla następnego elementu o klasie `.article` względem rodzica dla elementu o klasie `.js-curr` dodaj atrybut `title` o wartości `nextElementSibling`

const siblingArticle = parentEl.nextElementSibling;
siblingArticle.setAttribute('title', 'nextElementSibling');

// do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`
const lastArticle = siblingArticle.nextElementSibling;
const lastArticleParagraph = document.createElement('p');
const lastArticleBtn = lastArticle.querySelector('button');
lastArticleBtn.insertAdjacentElement('beforebegin', lastArticleParagraph);

// dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.

const clonedArticle = parentEl.cloneNode(true);
console.log(clonedArticle);
parentEl.insertAdjacentElement('beforebegin', clonedArticle);