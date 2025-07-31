console.log('DOM');

const curr = document.querySelector('.js-curr');

const cloneCurr = curr.cloneNode(true);

// 1

const newBtn = document.createElement('button');
newBtn.innerText = 'Usuń z koszyka';
curr.parentElement.appendChild(newBtn);

// 2

const children = Array.from(curr.parentElement.children);
console.log(children);
children.forEach(function(item){
    if(item !== curr){
        item.classList.add('siblings');
    }
    
});


// 3

const siblingElement = curr.parentElement.nextElementSibling;
siblingElement.title = 'nextElementSibling';


// 4

const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling;
const btn = lastArticle.children[lastArticle.children.length -1];

const pElement = document.createElement('p');
pElement.innerText = 'asffffdsfdsfsfsdfdsfsdf';

lastArticle.insertBefore(pElement, btn)


// 5

const firstArticle = curr.parentElement;
const cloneArticle = firstArticle.cloneNode(true);
firstArticle.parentElement.insertBefore(cloneArticle, firstArticle)
