console.log("DOM");

const curr = document.querySelector(".js-curr");
if (curr) {
  const currParent = curr.parentElement;
  const currBro = document.createElement("button");
  currParent.appendChild(currBro);
  currBro.innerText = "Usuń z koszyka";

  if (currParent.hasChildNodes()) {
    const currSiblings = currParent.children;
    for (let i = 0; i < currSiblings.length; i++) {
      currSiblings[i].classList.add("siblings");
    }
  }

  const secondArticle = currParent.nextElementSibling;
  if (secondArticle) {
    secondArticle.setAttribute("title", "nextElementSibling");
  }
  const thirdArticle = secondArticle.nextElementSibling;
  if (thirdArticle) {
    const btnInThirdArticle = thirdArticle.lastElementChild;
    const pEl = document.createElement("p");
    thirdArticle.insertBefore(pEl, btnInThirdArticle);
  }

  const articlesList = currParent.parentElement;
  const clonedArticle = currParent.cloneNode(true);
  articlesList.insertBefore(clonedArticle, currParent);
}
