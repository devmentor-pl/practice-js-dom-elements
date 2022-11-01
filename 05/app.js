console.log('DOM');

const curr = document.querySelector('.js-curr');
if (curr) {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Usuń z koszyka";
  curr.parentElement.appendChild(deleteBtn);

  const addClasses = Array.from(curr.parentElement.children).forEach(function (el) {
    el.classList.add("siblings");
  });

  const titleNextElement = curr.parentElement.nextElementSibling.dataset.title = "nextElementSibling";

  const mainArticle = curr.parentElement.parentElement;
  const mainArticleLast = mainArticle.lastElementChild;
  const newP = document.createElement("p");
  newP.innerText = "Czesc";
  const buttonLast = mainArticle.lastElementChild.children[2];
  const additionalP = mainArticleLast.insertBefore(newP, buttonLast)

  const cloneArticle = mainArticle.children[2].cloneNode(true);
  mainArticle.insertBefore(cloneArticle, curr.parentElement)
};