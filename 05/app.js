console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement("button")
button.textContent = "usuń z koszyka"
button.style.marginLeft = "5px"
curr.parentNode.insertBefore(button, curr.nextSibling)

let sibiling = curr.parentNode.firstChild
while (sibiling) {
  if (sibiling.nodeType === 1 && sibiling !== curr) {
    sibiling.classList.add("sibiling")
  }
  sibiling = sibiling.nextSibling
}

const nextArticle = curr.parentNode.nextElementSibling
if (nextArticle && nextArticle.classList.contains("article")) {
  nextArticle.setAttribute("title", "nextElementSibiling")
}

const lastArticle = document.querySelector(".articles").lastElementChild
const paragraph = document.createElement("p")
paragraph.textContent = "Dodatkowy paragraf"
lastArticle.insertBefore(paragraph, lastArticle.querySelector("button"))

const firstArticle = document.querySelector(".articles").firstElementChild
const article = firstArticle.cloneNode(true)
document.querySelector(".articles").insertBefore(article, firstArticle)