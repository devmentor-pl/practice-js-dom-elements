console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button');

newButton.innerText = 'Usuń z koszyka.';

curr.parentElement.appendChild(newButton);

const childrenFromParentElement = curr.parentElement.children;

console.log(childrenFromParentElement);

for (let i = 0; i < childrenFromParentElement.length; i++) {
    console.log(i);
    childrenFromParentElement[i].classList.add('siblings');
}

if (curr.parentElement.nextElementSibling.className.includes('article')) {

    curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');
}


const parent = curr.parentElement;

const parent2 = parent.parentElement;

const parent3 = parent2.lastElementChild;


const newParagraph = document.createElement('p');

const pElement = parent3.lastElementChild;

console.log(pElement);

parent3.insertBefore(newParagraph, pElement);

newParagraph.innerText = 'New paragraph with text';


console.log(parent2);

const newArticle = document.createElement('article');

const firstChildParent2 = parent2.firstElementChild;

console.log(firstChildParent2);

parent2.insertBefore(newArticle, firstChildParent2);




const newH1 = document.createElement('h1');

const newParagraph2 = document.createElement('p');

const newButton2 = document.createElement('button');

newArticle.appendChild(newH1);

newH1.innerText = 'New h1 text.';
newH1.classList.add('article__title');

newArticle.appendChild(newParagraph2);

newParagraph2.innerText = 'New paragraph with text.';
newParagraph2.classList.add('article__description');

newArticle.appendChild(newButton2);

newButton2.innerText = 'Kupuję!';
newButton2.classList.add('article__btn');





