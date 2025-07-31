console.log('DOM');

let curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;

const currParentSibling = currParent.nextElementSibling;
currParentSibling.setAttribute('title', 'nextSiblingElement');

const currLastParentSibling = currParentSibling.nextElementSibling;
const newParagraph = document.createElement('p');

const cloneArt = currParent.cloneNode(true);
const art = document.querySelector('.articles');

art.insertAdjacentElement('afterbegin', cloneArt);

newParagraph.textContent = 'Lorem Ipsum dolor sit amet';
const pEl = currLastParentSibling.querySelector('p');
currLastParentSibling.insertBefore(newParagraph, pEl);

const btn = document.createElement('button');
btn.textContent = 'Usuń z koszyka';
curr.insertAdjacentElement('afterend', btn);

let siblingEl = curr.parentElement.children;
console.log(siblingEl);

[...siblingEl].forEach((el) => {
  if (el !== curr) {
    el.className = 'siblings';
  }
});
