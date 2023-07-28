console.log("DOM");

const curr = document.querySelector(".js-curr");

if (curr) {
  const btnSibling = document.createElement("button");
  curr.parentElement.appendChild(btnSibling);
  btnSibling.textContent = "usuń z koszyka";

  const siblings = curr.parentElement.children;
  for (let i = 0; i < siblings.length; i++) {
    if (!siblings[i].classList.contains("js-curr")) {
      siblings[i].classList.add("siblings");
    }
  }
  const firstElChild = curr.parentElement.firstElementChild;
  firstElChild.setAttribute("title", "nextElementSibling");

  let lastArticle = curr.parentElement.nextElementSibling;

  if (lastArticle) {
    lastArticle = lastArticle.nextElementSibling;
    const lastArticleBtn = lastArticle.lastElementChild;
    const lastArticleSecondP = document.createElement("p");
    lastArticle.appendChild(lastArticleSecondP);
    lastArticle.insertBefore(lastArticleSecondP, lastArticleBtn);
    lastArticleSecondP.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.";
  }

  const childOfSection = lastArticle.parentElement.childNodes;
  const section = lastArticle.parentElement;
  let copyArticles = childOfSection.forEach(function (article) {
    const clone = article.cloneNode(true);
    section.appendChild(clone);
  });
}
