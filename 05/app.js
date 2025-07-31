console.log("DOM");

const curr = document.querySelector(".js-curr");
const newBtn = document.createElement("BUTTON");
newBtn.innerText = "usuń z koszyka";
const parentCurr = curr.parentNode;

parentCurr.appendChild(newBtn);

const parentChildren = parentCurr.children;
for (const el of parentChildren) {
  el.classList.add("siblings");
}

const secondChild = parentCurr.nextElementSibling;
secondChild.setAttribute("title", "nextElementSibling");

const articleParent = parentCurr.parentNode;
const articleLastChild = articleParent.lastElementChild;
const newParagraf = document.createElement("p");
newParagraf.innerText = "Dodatkowy paragraf";
const articleLastChildBtn = articleLastChild.lastElementChild;
articleLastChild.insertBefore(newParagraf, articleLastChildBtn);

const newArticle = parentCurr.cloneNode(true);
articleParent.insertBefore(newArticle, parentCurr);
