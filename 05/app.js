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