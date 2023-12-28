const curr = document.querySelector('.js-curr');
// const container=document.querySelector('')

const remove = document.createElement('button');
remove.innerText="Usuń z koszyka!"

curr.parentElement.appendChild(remove);

const siblings=curr.parentElement.children;

for(let i=0; i<siblings.length; i++){
   siblings[i].classList.add('siblings');
   // console.log(siblings[i].classList);
}

curr.parentElement.nextElementSibling.setAttribute('title','nextElementSibling');

const paragraph=document.createElement('p');
paragraph.innerText="jestem paragrafem przed buttonem";

const lastArticle = curr.parentElement.parentElement.lastElementChild;
const lastArticleButton = curr.parentElement.parentElement.lastElementChild.lastElementChild;

lastArticle.insertBefore(paragraph, lastArticleButton);

const parentArticles = curr.parentElement.parentElement;
const firstArticle = parentArticles.firstElementChild;

parentArticles.style.border='1px solid red';

const newArticle=document.createElement('article');

parentArticles.insertBefore(newArticle,firstArticle);

newArticle.innerHTML="<h1>Jestem tu nowy</h1><p>nowy paragraf</p><button>Nowy button</button>";


