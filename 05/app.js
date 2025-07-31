console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1
const newBtn = document.createElement('button');
newBtn.innerText = 'Usuń z koszyka';

curr.parentElement.appendChild(newBtn);

// 2
const currSiblings = curr.parentElement.children
const siblingsArr = Array.from(currSiblings)

siblingsArr.forEach(function(item) {    
    item.classList.add('.siblings');
});

// 3
const currFirstUncle = curr.parentElement.nextElementSibling;
currFirstUncle.setAttribute('title', 'nextElementSibling');

// 4
const currSecondUncle = currFirstUncle.nextElementSibling;
const secundUncleP = document.createElement('p');

secundUncleP.innerText = 'Nowy paragraf';
currSecondUncle.insertBefore(secundUncleP, currSecondUncle.lastElementChild);

// 5
const newArticle = curr.parentElement.cloneNode(true);
currFirstUncle.parentElement.insertBefore(newArticle, currFirstUncle);