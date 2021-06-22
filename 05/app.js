console.log("DOM");

const curr = document.querySelector(".js-curr");
console.log(curr);

// Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej curr elementu. Element ten niech zawiera napis usuń z koszyka.

const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Usuń z koszyka";
curr.parentElement.appendChild(deleteButton);

// dla wszystkich elementów, które są rodzeństwem dla elementu o klasie .js-curr dodaj klasę .siblings (wykorzystaj pętlę)

const siblingList = [];
/*let sibling = curr.parentNode.firstChild;
while (sibling) {
  if (sibling.nodeType === 1 && sibling !== curr) {
    siblingList.push(sibling);
  }
  sibling = sibling.nextSibling;
}*/

let sibling = curr.parentNode.firstElementChild;
while (sibling) {
  if (sibling !== curr) {
    siblingList.push(sibling);
  }
  sibling = sibling.nextElementSibling;
}

// dlaczego musimy sprawdzic czy sibling nie jest nodeType === 1 ?

console.log(siblingList);

// dla następnego elementu o klasie .article względem rodzica dla elementu o klasie .js-curr dodaj atrybut title o wartości nextElementSibling.

const nextElementSibling = curr.parentElement.nextElementSibling;
nextElementSibling.setAttribute("title", "nextElementSibling");
console.log(nextElementSibling);

// do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>

const newParagraph = document.createElement("p");
newParagraph.innerHTML = "Moj nowy paragraf";
newParagraph.style.color = "red";
const parentElement = curr.parentElement.parentElement.lastElementChild;
console.log(parentElement);
const elementAfterParagraph =
  curr.parentElement.parentElement.lastElementChild.lastElementChild;
console.log(elementAfterParagraph);
parentElement.insertBefore(newParagraph, elementAfterParagraph);

// Na pewno istnieje latwiejszy sposob?

// dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.

const newArticle = nextElementSibling.cloneNode(true);
newArticle.style.color = "pink";
console.log(newArticle);
const section = curr.parentElement.parentElement;
const elementAfterNewArticle = section.firstElementChild;
section.insertBefore(newArticle, elementAfterNewArticle);
