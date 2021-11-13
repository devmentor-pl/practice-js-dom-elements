console.log("DOM");

const curr = document.querySelector(".js-curr");
const currParentArticle = curr.parentElement;

// first task
if (curr) {
  const currBrother = document.createElement("button");
  currBrother.innerText = "Usuń z koszyka";
  currParentArticle.appendChild(currBrother);
}

// second task
const currParentSectionNode = currParentArticle.hasChildNodes();
let children = currParentArticle.children;
for (let i = 0; i < children.length; i++) {
  children[i].classList.add("siblings");
  curr.classList.remove("siblings");
}

// third task
const articleSibling = currParentArticle.nextElementSibling;
articleSibling.setAttribute("title", "nextElementSibling");

// fourth task
const lastArticleElement = articleSibling.nextElementSibling;
const lastArticleElementBtn = lastArticleElement.lastElementChild;
const pElement = document.createElement("p");
pElement.innerText = "DODATKOWY ELEMENT P, PRZED PRZYCISKIEM";
lastArticleElement.insertBefore(pElement, lastArticleElementBtn);

// fifth task
const firstArticleElement = curr.parentElement;
const sectionOfAllElement = articleSibling.parentElement;
const cloneArticle = articleSibling.cloneNode(true);
sectionOfAllElement.insertBefore(cloneArticle, firstArticleElement);
