console.log("DOM");

const curr = document.querySelector(".js-curr");

//1
const button = document.createElement("button");
const currParent = curr.parentElement;
button.textContent = "usuń z koszyka";
currParent.appendChild(button);

//2
const currSiblings = currParent.children;
for (let i = 0; i < currSiblings.length; i++) {
  currSiblings[i].setAttribute("class", "siblings");
}

//3
currParent.nextElementSibling.setAttribute("title", "nextElementSibling");

//4
const articles = currParent.parentElement.children;
const lastArticle = articles[articles.length - 1];
const paragraph = document.createElement("p");
lastArticle.insertBefore(paragraph,lastArticle.lastElementChild)

console.dir(articles);

//5
const article = document.createElement("article");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const button2 = document.createElement("button");
article.appendChild(h1)
article.appendChild(p)
article.appendChild(button2)
articles[0].parentElement.insertBefore(article, articles[0])