console.log("DOM");

const curr = document.querySelector(".js-curr");

if (curr) {
  const removeButton = document.createElement("button");
  removeButton.innerText = "usuń z koszyka";

  curr.parentElement.appendChild(removeButton);

  Array.from(curr.parentElement.children).forEach((elem) => {
    if (elem !== curr) {
      elem.classList.add("siblings");
    }
  });

  const nextArticle = curr.parentElement.nextElementSibling;

  if (nextArticle) {
    nextArticle.setAttribute("title", "nextElementSibling");
  }

  const lastArticle = curr.parentElement.parentElement.lastElementChild;

  if (lastArticle) {
    const p = document.createElement("p");
    p.innerText =
      "Commodo velit do consectetur mollit voluptate irure pariatur id consequat.";
    const button = lastArticle.lastElementChild;

    if (button) {
      lastArticle.insertBefore(p, button);
    }
  }

  const newArticle = document.createElement("article");
  newArticle.className = "articles__item article";

  const h1 = document.createElement("h1");
  h1.className = "article__title";
  h1.innerText = "JS - Obiekty";

  newArticle.appendChild(h1);

  const p = document.createElement("p");
  p.className = "article__description";
  p.innerText =
    "Et id consequat ullamco occaecat minim ea nulla esse mollit excepteur mollit.";

  newArticle.appendChild(p);

  const button = document.createElement("button");
  button.className = "article__btn";
  button.innerText = "Kupuję!";

  newArticle.appendChild(button);

  curr.parentElement.parentElement.appendChild(newArticle);
}
