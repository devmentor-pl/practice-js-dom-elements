console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button');
newButton.innerText = 'Usuń z koszyka';

const article1 = curr.parentElement;

article1.appendChild(newButton)

const art1Children = article1.children;
console.log(art1Children);
const arrOfArt1 = Array.from(art1Children)


arrOfArt1.forEach(function (item) {
    return item.classList.add('siblings') 
})

console.log(article1.children);

