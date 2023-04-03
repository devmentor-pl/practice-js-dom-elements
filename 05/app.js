console.log("DOM");

const curr = document.querySelector(".js-curr");
const btn = document.createElement("button");
btn.textContent = "Usuń z koszyka";
curr.parentElement.appendChild(btn);
Array.from(curr.parentElement.children).forEach((children) => {
  children.setAttribute("class", "sibling");
});
curr.parentElement.nextElementSibling.setAttribute(
  "title",
  "nextElementSibling"
);
const paragraph = document.createElement("p");
curr.parentElement.parentElement.lastElementChild.insertBefore(
  paragraph,
  curr.parentElement.parentElement.lastElementChild.lastElementChild
);

curr.parentElement.parentElement.insertBefore(
  curr.parentElement.parentElement.firstElementChild.cloneNode(true),
  curr.parentElement.parentElement.firstElementChild
);
