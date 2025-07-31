console.log("DOM");

const curr = document.querySelector(".js-curr");

const removeButton = document.createElement("button");
removeButton.classList.add("article__btn");
removeButton.textContent = "Usuń z koszyka";
curr.parentNode.appendChild(removeButton);

const siblings = curr.parentNode.children;
for (let sibling of siblings) {
  if (sibling !== curr) {
    sibling.classList.add("siblings");
  }
}

const nextArticle = curr.parentNode.nextElementSibling;
if (nextArticle && nextArticle.classList.contains("article")) {
  nextArticle.setAttribute("title", "nextElementSibling");
}

const lastArticle = curr.parentNode.parentNode.lastElementChild;
if (lastArticle) {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("article__description");
  newParagraph.textContent = "To jest dodatkowy paragraf przed przyciskiem.";
  lastArticle.insertBefore(newParagraph, lastArticle.querySelector("button"));
}

const firstArticle = curr.parentNode.parentNode.firstElementChild;
const newArticle = firstArticle.cloneNode(true);

newArticle.querySelector(".article__title").textContent = "JS - Nowy Artykuł";
newArticle.querySelector(".article__description").textContent =
  "To jest nowy artykuł dodany na początku listy.";

const articlesSection = curr.parentNode.parentNode;
articlesSection.insertBefore(newArticle, articlesSection.firstChild);
