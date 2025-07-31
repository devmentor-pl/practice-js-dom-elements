console.log('DOM');

const curr = document.querySelector('.js-curr');

//1.  Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej `curr`. Element ten niech zawiera napis `usuń z koszyka`.

const newButton = document.createElement('button');

newButton.textContent = 'usuń z koszyka';

curr.parentElement.appendChild(newButton);

//2. Do wszystkich elementów, które są rodzeństwem elementu o klasie `.js-curr`, dodaj klasę `.siblings` (wykorzystaj pętlę).

const siblings = [...curr.parentElement.children];



siblings.forEach(sibling => {
    if (sibling !== curr) {
        sibling.classList.add('siblings');
    }
})

const parent = curr.parentElement;

//3. Do następnego elementu o klasie `.article`, który występuje zaraz po rodzicu elementu o klasie `.js-curr`, dodaj atrybut `title` o wartości `nextElementSibling`.

const nextArticle = parent.nextElementSibling;

if (nextArticle && nextArticle.classList.contains('article')) {
    nextArticle.setAttribute('title', 'nextElementSibling');
}

const lastArticle = parent.parentElement.lastElementChild;

// 4. Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`.

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Dodatkowy paragraf';

//5. Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły.
const lastButton = lastArticle.querySelector('button');
lastArticle.insertBefore(newParagraph, lastButton);