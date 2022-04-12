console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement("button");
button.textContent = "usuń z koszyka";
const currParent = curr.parentElement;
currParent.appendChild(button);

const siblings = currParent.children;
[...siblings].forEach(el => {
    el.classList.add("siblings");
});


const nextElAfterCurrParent = currParent.nextElementSibling;
nextElAfterCurrParent.setAttribute("title","nextElementSibling");

const articles = currParent.parentElement;
const lastArticle = articles.lastElementChild;
const newP = document.createElement("p");
newP.textContent = "newP";
lastArticle.insertBefore(newP, lastArticle.lastElementChild);

const clonedArticle = lastArticle.cloneNode(true);
articles.insertBefore(clonedArticle, articles.firstElementChild);