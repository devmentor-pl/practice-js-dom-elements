console.log('DOM');

const curr = document.querySelector('.js-curr');

// NR 1

const newButton = document.createElement('button');
newButton.innerText = 'Usuń z koszyka';

const article1 = curr.parentElement;

article1.appendChild(newButton)

// NR 2
const art1Children = article1.children;
console.log(art1Children);
const arrOfArt1 = Array.from(art1Children)


arrOfArt1.forEach(function (item) {
    return item.classList.add('siblings') 
})

// NR 3

const article2 = article1.nextElementSibling
// console.log(article2);
article2.setAttribute('title', 'nextElementSibling')
console.log(article2);

