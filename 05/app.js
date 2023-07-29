console.log('DOM');

const curr = document.querySelector('.js-curr');

const firstArticle = curr.parentElement;
const currSiblings = firstArticle.children;
const firstArticleNextElem = firstArticle.nextElementSibling;
const sectionArticles = firstArticle.parentElement;
const lastArticles = sectionArticles.lastElementChild;

const newButton = document.createElement('button');
const newParagraph = document.querySelector('p');


// 5.   ...elementy artykulu sa widoczne w drzewku DOM, lecz chyba pozycjonowanie sie rozjechalo i na podgladzie nie widac
const cloneArticle = firstArticle.cloneNode(true);
sectionArticles.insertBefore(cloneArticle, firstArticle);

// 1
newButton.textContent = 'Usun z koszyka';
firstArticle.appendChild(newButton);
// 2
for (const children of currSiblings) {
	children.classList.add('siblings');
}
//3
firstArticleNextElem.setAttribute('title', 'nextElementSibiling');
//4
newParagraph.textContent = 'paragraf przed buttonem';
lastArticles.insertBefore(newParagraph, lastArticles.lastElementChild);
