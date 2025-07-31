console.log('DOM');

const curr = document.querySelector('.js-curr');
console.log(curr);

const newButton = document.createElement("button");
newButton.innerText = "usuń koszyk";
curr.parentNode.appendChild(newButton);

const siblings = Array.from(curr.parentNode.children);
siblings.forEach(sibling => {
    if (sibling !== curr) {
        sibling.classList.add("siblings");
    };
});

const nextArticle = curr.parentNode.nextElementSibling;
if (nextArticle && nextArticle.classList.contains("article")) {
    nextArticle.setAttribute("title", "nextElementSibling");
}

const lastArticle = document.querySelector("article:last-of-type");
const newParagraph = document.createElement("p");
newParagraph.textContent = "To jest nowy paragraf";
const buttonInLastArticle = lastArticle.querySelector("button");
lastArticle.insertBefore(newParagraph, buttonInLastArticle);

const articlesParent = document.querySelector("article").parentNode;
const newArticle = document.createElement('article');
const newArticleContent = document.createElement("p");
newArticleContent.textContent = "Nowy artykuł na początku listy";
newArticle.appendChild(newArticleContent);

articlesParent.insertBefore(newArticle, articlesParent.firstElementChild);