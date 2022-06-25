console.log("DOM");

const curr = document.querySelector(".js-curr");
if (curr) {
	const deleteButton = document.createElement("button");
	deleteButton.innerText = "usuń z koszyka";
	const currParent = curr.parentElement;
	currParent.appendChild(deleteButton);
	const currParChildren = currParent.children;
	const arrCh = Array.from(currParChildren);
	arrCh.forEach(function (element) {
		if (element.className !== "js-curr") element.classList.add("siblings");
	});
	const secondArticle = currParent.nextElementSibling;
	secondArticle.setAttribute("title", "nextElementSibling");
	const lastArticle = secondArticle.nextElementSibling;
	const lastButton = lastArticle.lastElementChild;
	const newP = document.createElement("p");
	newP.innerText = "Paragraf dodany do ostatniego artykułu przed znacznikiem przycisku";
	lastArticle.insertBefore(newP, lastButton);
	const newArticle = secondArticle.cloneNode(true);
	const articleParent = currParent.parentElement;
	articleParent.insertBefore(newArticle, currParent);
}
