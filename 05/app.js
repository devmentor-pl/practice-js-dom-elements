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

  const section = lastArticle.parentElement;
  const newArticle = document.createElement('article');
  const firsArticleChild = section.firstElementChild;
  section.appendChild(newArticle);
  section.insertBefore(newArticle, firsArticleChild);

  const childOfSection = section.children;
  
  for (let i = 0; i < childOfSection.length; i++) {
    if (childOfSection[i].classList.contains('article')) {
      const clone = childOfSection[i].cloneNode(true);
      newArticle.appendChild(clone);
    }
  }
  
}

