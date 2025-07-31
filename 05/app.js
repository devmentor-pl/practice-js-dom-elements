console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;

const button = document.createElement('button');
button.innerText = 'Usuń z koszyka';
currParent.append(button);

for (const element of currParent.children) {
    if (!element.classList.contains('js-curr')) {
        element.classList.add('siblings');
    }
}

currParent.nextElementSibling.setAttribute('title', 'nextElementSibling');

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Nuper creatus paragraph!!';

const newButton = currParent.parentElement.lastElementChild.querySelector('button');
currParent.parentElement.lastElementChild.insertBefore(newParagraph, newButton);

const copiedArticle = currParent.cloneNode(true);
currParent.parentElement.insertBefore(copiedArticle, currParent);