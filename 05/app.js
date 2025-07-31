console.log("DOM");

const curr = document.querySelector(".js-curr");
// 1.
const deletBtn = document.createElement("button");
deletBtn.innerText = "usuń z koszyka";
curr.parentElement.appendChild(deletBtn);
// 2.
const childArr = [...curr.parentElement.children];
childArr.forEach((element) => {
  if (element) {
    element.classList.add("siblings");
  }
});
// 3.
curr.parentElement.nextElementSibling.setAttribute(
  "title",
  "nextElementSibling"
);
// 4.
const lastArticle = curr.parentElement.parentElement.lastElementChild;
console.log(lastArticle);
const lastArticleBtn = lastArticle.querySelector("button");
const newP = document.createElement("p");
newP.innerText = "---> New text was added with JavaScript right here <---";
lastArticle.insertBefore(newP, lastArticleBtn);

// 5.

const articleData = {
  article: {
    element: "article",
    classList: ["articles__item", "article"],
    text: "",
  },
  header: {
    element: "h1",
    classList: ["article__title"],
    text: "JS - Fist Article",
  },
  paragrph: {
    element: "p",
    classList: ["article__description"],
    text: "JS - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.",
  },
  button: {
    element: "button",
    classList: ["article__btn"],
    text: "JS - Kupuję!",
  },
};

const sectionArticles = curr.parentElement.parentElement;
const newArticle = createElement(articleData.article);
sectionArticles.insertBefore(newArticle, sectionArticles.firstChild);
newArticle.appendChild(createElement(articleData.header));
newArticle.appendChild(createElement(articleData.paragrph));
newArticle.appendChild(createElement(articleData.button));

function createElement(obj) {
  const element = document.createElement(obj.element);
  for (classElement in obj.classList) {
    element.classList.add(classElement);
  }
  element.innerText = obj.text;
  return element;
}
