console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr) {
    const articleElement = curr.parentElement;
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "Usuń z koszyka";
    articleElement.appendChild(buttonElement);

    if(articleElement.hasChildNodes()) {
        const child = articleElement.children;
        const arrChild = Array.from(child);
        arrChild.forEach(function(element) {
            element.classList.add("siblings");
        });
    };

    const siblingsElement = articleElement.nextElementSibling;
    siblingsElement.setAttribute("title", "nextElementSibling");

    const newParagraph = document.createElement("p");
    newParagraph.innerText = "Nowy paragraf";
    const lastArticle = siblingsElement.parentElement.lastElementChild;
    const buttonArticle = lastArticle.querySelector("button");
    lastArticle.insertBefore(newParagraph, buttonArticle);

    const newArticle = lastArticle.cloneNode(true);
    articleElement.parentElement.insertBefore(newArticle, articleElement);

}

