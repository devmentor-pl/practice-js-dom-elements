console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr){

const article1 = curr.parentElement;

const newButton = document.createElement('button')
newButton.innerText = "usuń z koszyka";

article1.appendChild(newButton);

//TEN FRAGMENT NIE DZIAŁA
// const children = article1.children;
// const arr= [...children];

// arr.forEach(function(element) {
//     children.classList.add('sibling')
// })

const article2 = article1.nextElementSibling;

article2.setAttribute('title','nextElementSibling');

const article3 = article2.nextElementSibling;

const newP = document.createElement('p')
const button = article3.lastElementChild;
article3.insertBefore(newP, button );

const section = article1.parentElement;
const newArticle = document.createElement('article');
newArticle.setAttribute('class','articles__item article');
section.insertBefore(newArticle, article1)

const newH1 = document.createElement('h1')
newH1.setAttribute('class','article__title');
newH1.innerText = "JS - Elementy DOM"
newArticle.appendChild(newH1);

const newP2 = document.createElement('p')
newP2.setAttribute('class','article__description');
newP2.innerText = "Lorem..."
newArticle.appendChild(newP2);

const newBtn = document.createElement('button')
newBtn.setAttribute('class','article__btn');
newBtn.innerText = "Kupuje!"
newArticle.appendChild(newBtn);


}

//tu tez na piechote, ale liczę, ze rozwiązania z pętlą omówimy na spotkaniu 