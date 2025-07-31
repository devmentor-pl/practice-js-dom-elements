console.log("DOM");

const curr = document.querySelector(".js-curr");

const newButton = document.createElement("button");
newButton.innerText = "usuń z koszyka";
// newButton.classList.add("article__btn", "article__btn--remove");

if (curr && curr.parentElement) {
  curr.parentElement.appendChild(newButton);
  const currSiblings = curr.parentElement.children;
  const currSiblingsArr = [...currSiblings];
  console.log(currSiblings);
  currSiblingsArr.forEach(function (item) {
    if (item !== curr) {
      item.classList.add("siblings");
      console.log(item);
    }
  });
}
if (curr && curr.parentElement) {
  const siblingElement = curr.parentElement.nextElementSibling;
  if (siblingElement)
    siblingElement.setAttribute("title", "nextElementSibling");
  const lastSiblingElement =
    curr.parentElement.nextElementSibling?.nextElementSibling;
  if (lastSiblingElement) {
    const btn =
      lastSiblingElement.children[lastSiblingElement?.children.length - 1];
    console.log(btn);
    const pElement = document.createElement("p");
    pElement.innerText = "Dodany paragraf";
    lastSiblingElement.insertBefore(pElement, btn);
  }
}

if (curr && curr.parentElement) {
  const firstArticle = curr.parentElement;
  const newArticle = firstArticle.cloneNode(true);
  firstArticle.parentElement.insertBefore(newArticle, firstArticle);
}
