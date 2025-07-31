console.log("DOM");

const curr = document.querySelector(".js-curr");

//zadanie 1

const newButton = document.createElement("button");
newButton.innerText = "usuń z koszyka";
curr.parentElement.appendChild(newButton);

//zadanie 2

const child = Array.from(curr.parentElement.children);

child.forEach(function (item) {
    if (item !== curr) {
        item.classList.add("sibling");
    }
}); //do omówienia pętla for i napisanie warunku

//zadanie 3

const siblingElement = curr.parentElement.nextElementSibling;
siblingElement.title = "nextElementSibling";

//zadanie 4

const lastArticle = siblingElement.nextElementSibling;
const btn = lastArticle.children[lastArticle.children.length - 1];
const pElement = document.createElement("p");
pElement.innerText = "nowy paragraf";
lastArticle.insertBefore(pElement, btn);
console.log(btn);

//zadanie 5

const newClone = curr.parentElement.cloneNode(true);
curr.parentElement.parentElement.insertBefore(newClone, curr.parentElement);
