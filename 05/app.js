console.log("DOM");

const curr = document.querySelector(".js-curr");

// 1
const btnDelete = document.createElement("button");
btnDelete.innerText = "usuń z koszyka";
if (curr) curr.insertAdjacentElement("afterend", btnDelete);

// 2
const currParent = curr.parentElement;
const siblings = [...currParent.children].filter((el) => el !== curr);
siblings.forEach((el) => el.classList.add("siblings"));

// 3
const article = currParent.nextElementSibling;
if (article) article.setAttribute("title", "nextElementSibling");

// 4
const section = article.parentElement;
const lastArticle = section.lastElementChild;
const lastArticleBtn = lastArticle.lastElementChild;
const pEl = document.createElement("p");
pEl.innerText = "wstawiony paragraf";
lastArticleBtn.insertAdjacentElement("beforeBegin", pEl);

// 5
const cloneArticle = article.cloneNode(article);
section.insertAdjacentElement('afterbegin', cloneArticle)
