console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button');
newButton.textContent = 'usuń z koszyka';
curr.parentElement.appendChild(newButton);

const childElements = Array.from(curr.parentElement.children);

childElements.forEach((element) => {
  if (element !== curr) {
    element.classList.add('siblings');
  }
});

const siblingElement = curr.parentElement.nextElementSibling;
siblingElement.title = 'nextElementSibling';

const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling;
const button = lastArticle.children[lastArticle.children.length - 1];
const p = document.createElement('p');
p.textContent = 'lorem ipsum lorem lorem lalala';
lastArticle.insertBefore(p, button);

const nextArticle = curr.parentElement.cloneNode(true);
curr.parentElement.parentElement.insertBefore(nextArticle, curr.parentElement);