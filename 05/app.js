const curr = document.querySelector(".js-curr");
const btnSibling = document.createElement("button");

btnSibling.textContent = "usuń z koszyka";

curr.parentElement.appendChild(btnSibling);
const children = [...curr.parentElement.children];

children.forEach((element) => {
  element.classList.add(".siblings");
});

curr.parentElement.nextElementSibling.setAttribute(
  "title",
  "nextElementSibling"
);
const p = document.createElement("p");
p.textContent = "P wstawione z zadania";

curr.parentElement.parentElement.lastElementChild.insertBefore(
  p,
  curr.parentElement.parentElement.lastElementChild.lastElementChild
);

// ---------- 5

const articleFifthTask = document.createElement("article");
const h1FifthTask = document.createElement("h1");
const pFifthTask = document.createElement("p");
const buttonFifthTask = document.createElement("button");

pFifthTask.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic";
h1FifthTask.textContent = "JS - Wstawiony element";
buttonFifthTask.textContent = "Kupuję!";

articleFifthTask.appendChild(h1FifthTask);
articleFifthTask.appendChild(pFifthTask);
articleFifthTask.appendChild(buttonFifthTask);

curr.parentElement.parentElement.insertBefore(
  articleFifthTask,
  curr.parentElement.parentElement.firstElementChild
);

console.log();
