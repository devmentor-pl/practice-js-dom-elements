console.log("DOM");

const curr = document.querySelector(".js-curr");

if (curr) {
  // Task 1
  const newButtonEl = document.createElement("button");
  newButtonEl.textContent = "Usun z koszyka";

  curr.parentElement.appendChild(newButtonEl);

  // 2
  Array.from(curr.parentElement.children).forEach((child) => {
    if (child === curr) return;
    child.classList.add("siblings");
  });

  // 3
  const articleEl = curr.parentElement.nextElementSibling;
  if (articleEl) articleEl.setAttribute("title", "nextElementSibling");

  // 4
  const lastArticleEl = curr.parentElement.parentElement.lastElementChild;
  if (lastArticleEl && lastArticleEl.tagName === "ARTICLE") {
    const buttonEl = lastArticleEl.querySelector("button");

    if (buttonEl) {
      const newParagraphEl = document.createElement("p");
      newParagraphEl.textContent = "Additional paragraph";
      lastArticleEl.insertBefore(newParagraphEl, buttonEl);
    }
  }

  // 5
  const sectionEl = curr.parentElement.parentElement;
  if (sectionEl && sectionEl.tagName === "SECTION") {
    const newArticle = document.createElement("article");
    newArticle.className = "articles__item article";

    const heading = document.createElement("h1");
    heading.classList.add("article__title");
    heading.textContent = "Heading";

    const paragraph = document.createElement("p");
    paragraph.classList.add("article__description");
    paragraph.textContent = "Paragraph";

    const button = document.createElement("button");
    button.classList.add("article__button");
    button.textContent = "Kupuje!";

    newArticle.appendChild(heading);
    newArticle.appendChild(paragraph);
    newArticle.appendChild(button);

    const firstArticle = sectionEl.firstChild;
    sectionEl.insertBefore(newArticle, firstArticle);
  }
}
