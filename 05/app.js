console.log('DOM');

const curr = document.querySelector('.js-curr');

//Zadanie 1

const button = document.createElement('button');
const parent = curr.parentElement;
parent.appendChild(button);
button.innerText = 'Usuń z koszyka';

//Zadanie 2

// Do wszystkich elementów, które są 
// rodzeństwem elementu o klasie .js-curr, 
// dodaj klasę .siblings (wykorzystaj pętlę).

// lista rodzeństwa .js-curr
const allChildren = parent.children;

for(i=0; i<4; i ++) {

}

//Zadanie 3

const firstChild = parent.firstElementChild;
firstChild.setAttribute('title', 'nextElementSibling');

//Zadanie 4
// umieść newParagraph przed znacznikiem <button/>.

const newParagraph = document.createElement('p');
const mainParent = parent.parentElement;
const lastArticle = mainParent.lastElementChild;

lastArticle.appendChild(newParagraph);

// Zadanie 5

const newArticleElement = document.createElement('article');

const firstChildParent = mainParent.firstElementChild;

mainParent.insertBefore(newArticleElement, firstChildParent);

newArticleElement.className = 'articles__item article';
console.log(mainParent);

//dodać h1, paragraf, button z klasami i tekstem - jak w innych paragrafach
// czy tutaj pojedyńczo czy jakieś pętle itp?




