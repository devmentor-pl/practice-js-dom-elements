console.log('DOM');

const curr = document.querySelector('.js-curr');

const newBtn = document.createElement('button');
newBtn.innerText = 'Usuń z koszyka';
curr.after(newBtn);

const parent = curr.parentElement;

for(let child of parent.children) {
    if( child !== curr) {
        child.classList.add('siblings');
    }
}

const nextArticle = parent.nextElementSibling;
nextArticle.setAttribute('title', 'nextElementSibling');

const lastArticle = nextArticle.nextElementSibling;
const nextP = document.createElement('p');
lastArticle.insertBefore(nextP, lastArticle.lastElementChild);


const cloneArticle = parent.cloneNode(true);
const section = parent.parentElement;
section.insertBefore(cloneArticle, section.firstElementChild);

console.log(section);

