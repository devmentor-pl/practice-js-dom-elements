console.log("DOM");

const curr = document.querySelector(".js-curr");

// 1

const currSibling = document.createElement("button");
currSibling.innerText = "Usuń z koszyka";
const parent = document.querySelector("article");
parent.appendChild(currSibling);

// 2

const allChildren = parent.children;

const allChildrenArray = Array.from(allChildren);

allChildrenArray.forEach(function (item) {
	className = item.className;
	if (!className.includes("js-curr")) {
		item.classList.add("siblings");
	}
});

// 3

const nextArticle = parent.nextElementSibling;
nextArticle.setAttribute("title", "nextElementSibling");

// 4

const sectionParent = document.querySelector("section");

const lastChild = sectionParent.lastElementChild;

const paragraphEl = document.createElement("p");

const lastButton = lastChild.querySelector("button");

lastChild.insertBefore(paragraphEl, lastButton);

// 5

const firstArticle = document.createElement("article");

sectionParent.insertBefore(firstArticle, sectionParent.firstElementChild);

firstArticle.innerHTML = "<h1></h1> <p></p> <button></button>";
