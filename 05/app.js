console.log("DOM");

const curr = document.querySelector(".js-curr");

const button = document.createElement("button");
button.textContent = "usuń z koszyka";

curr.parentElement.appendChild(button);

const siblings = function (elem) {
  let siblings = [];

  let sibling = elem.parentNode.firstElementChild;

  do {
    if (sibling != elem) {
      siblings.push(sibling);
    }
  } while ((sibling = sibling.nextElementSibling));

  return siblings;
};

const currSiblings = siblings(curr);

currSiblings.forEach(function (el) {
  el.classList.add(".siblings");
});

const currParent = curr.parentElement;

currParent.nextElementSibling.setAttribute("title", "nextElementSibling");

const currGrandParent = currParent.parentElement;

const paragraph = document.createElement("p");
paragraph.textContent = "lorem ipsum";

currGrandParent.lastElementChild.lastElementChild.previousElementSibling.appendChild(
  paragraph
);

const article = currParent.nextElementSibling.cloneNode(false);
currGrandParent.insertBefore(article, currGrandParent.firstChild);
