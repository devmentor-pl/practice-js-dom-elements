console.log('DOM');

const curr = document.querySelector('.js-curr');
// 1.  Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej `curr`. Element ten niech zawiera napis `usuń z koszyka`.
const newButton = document.createElement('button');
newButton.innerText = 'usuń z koszyka';
curr.parentElement.appendChild(newButton);
//2. Do wszystkich elementów, które są rodzeństwem elementu o klasie `.js-curr`, dodaj klasę `.siblings` (wykorzystaj pętlę).
console.log(curr.parentElement.children);
const children = Array.from(curr.parentElement.children)
children.forEach(function(child){
    if(child !== curr) {
        child.classList.add('siblings')
    }
})
curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');
const newPar = document.createElement('p')
const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling
lastArticle.insertBefore(newPar, lastArticle.querySelector('p'));
const firstArticle = document.createElement('article');
firstArticle.classList.add('articles.item','article' );
const heading = document.createElement('h1');
heading.classList.add('article__title');
heading.innerText = 'Czy to sie uda?';
firstArticle.appendChild(heading);
const secondPar = document.createElement('p')
secondPar.classList.add('article__description');
secondPar.innerText = 'Zobaczymy'
firstArticle.appendChild(secondPar);
const lastButton = document.createElement('button')
lastButton.classList.add('article__btn');
lastButton.innerText = 'Wkrótce';
firstArticle.appendChild(lastButton);
const addArticle = curr.parentElement.parentElement;
addArticle.insertBefore(firstArticle, addArticle.firstChild);