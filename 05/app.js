console.log('DOM');

const curr = document.querySelector('.js-curr');

//1
const siblingButton = document.createElement('button');
siblingButton.innerText = "usuń z koszyka";
const firstArticleDOM = curr.parentElement;
firstArticleDOM.appendChild(siblingButton);


//2
const siblings = firstArticleDOM.children;

for (i = 0; i < siblings.length; i++) {
    if (!siblings[i].className.includes('js-curr')) {
        siblings[i].classList.add('siblings');
    }
}


//3
const secondArticle = firstArticleDOM.nextElementSibling;
secondArticle.setAttribute('title', 'nextElementSibling');


//4
const paragraph = document.createElement('p');
const lastArticle = firstArticleDOM.parentElement.lastElementChild;
const lastButton = lastArticle.lastElementChild;
lastArticle.insertBefore(paragraph, lastButton);



//5
const article = document.createElement('article');
const structureElements = secondArticle.children;
const section = firstArticleDOM.parentElement;

let nextStructureElement;

for (let j = 0; j < structureElements.length; j++) {
    nextStructureElement = structureElements[j].cloneNode(false);
    article.appendChild(nextStructureElement);
}

section.insertBefore(article, firstArticleDOM);
