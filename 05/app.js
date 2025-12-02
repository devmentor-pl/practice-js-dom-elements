console.log("DOM");

const curr = document.querySelector(".js-curr");
const removeBtn = document.createElement("button");
const currParent = curr.parentElement;

currParent.appendChild(removeBtn);
const removeBtnText = document.createTextNode("Usuń z koszyka");
removeBtn.appendChild(removeBtnText);

const siblings = currParent.children;
const siblingsArray = [...siblings];

siblingsArray.forEach(function (el) {
  if (!el.classList.contains("js-curr")) {
    el.classList.add("sibling");
  }
});
if (currParent.nextElementSibling.classList.contains("article")) {
  currParent.nextElementSibling.setAttribute("title", "nextElementSibling");
}

const articleParrent = currParent.parentElement;
const p = document.createElement("p");
const lastBtn = articleParrent.lastElementChild.lastElementChild;
articleParrent.lastElementChild.insertBefore(p, lastBtn);

const clonedArticle = currParent.cloneNode(true);
articleParrent.insertBefore(clonedArticle, currParent);
