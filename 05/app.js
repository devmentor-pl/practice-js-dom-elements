console.log('DOM');

const curr = document.querySelector('.js-curr');

//Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej curr elementu. Element ten niech zawiera napis usuń z koszyka.
const newButton = document.createElement('button');
newButton.textContent = 'usuń z koszyka';

curr.parentElement.appendChild(newButton);


//dla wszystkich elementów, które są rodzeństwem dla elementu o klasie .js-curr dodaj klasę .siblings (wykorzystaj pętlę)
const currParentCollection = curr.parentElement.children;
const currParentArray = Array.from(currParentCollection);
currParentArray.forEach(function (el) {
    if (el !== curr) {
        el.classList.add('siblings');
    }
})


//dla następnego elementu o klasie .article względem rodzica dla elementu o klasie .js-curr dodaj atrybut title o wartości nextElementSibling.
const nextArticle = curr.parentElement.nextElementSibling;
nextArticle.setAttribute('title', 'nextElementSibling');


//do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>
const lastArticle = curr.parentElement.parentElement.lastElementChild;
const lastArticleButton = curr.parentElement.parentElement.lastElementChild.lastElementChild;

const newParagraph = document.createElement('p');

newParagraph.textContent = 'Lorem ipsum...';

lastArticle.insertBefore(newParagraph, lastArticleButton);


//dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.
const article = curr.parentElement;
const cloneArticle = article.cloneNode(true);
article.parentElement.insertBefore(cloneArticle, article);