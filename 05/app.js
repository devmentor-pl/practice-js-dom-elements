const curr = document.querySelector('.js-curr');
const secondBtn = curr.cloneNode(true);

curr.parentElement.appendChild(secondBtn);
secondBtn.innerText = 'Usuń z koszyka';

for (let i=0; i<curr.parentElement.children.length; i++) { //co wyskakuje gdy i<=? widziałem jeden element więcej i ostatni jest undefined
    curr.parentElement.children[i].classList.add('siblings');
}

curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');

const newParagraph = document.createElement('p');

console.log(curr.parentElement.nextElementSibling.nextElementSibling.children[2]);
curr.parentElement.nextElementSibling.nextElementSibling.insertBefore(newParagraph, curr.parentElement.nextElementSibling.nextElementSibling.children[2]);


const newArticle = curr.parentElement.nextElementSibling.cloneNode(true);
console.log(curr.parentElement.parentElement.children[0]);
curr.parentElement.parentElement.insertBefore(newArticle, curr.parentElement.parentElement.children[0]);