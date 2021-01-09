console.log('DOM');

const curr = document.querySelector('.js-curr');

// zadanie 1
const  btn = document.createElement('button');
btn.innerText = 'Usuń z koszyka';
curr.parentElement.appendChild(btn);

//zadanie 2

const children = curr.parentElement.children;

for( let i=0; i < children.length; i++) {
    if(children[i] !== curr) {
        children[i].classList.add('siblings');
    }
}



const sibling = curr.parentElement.nextElementSibling;

sibling.setAttribute('title', 'nextElementSibling');