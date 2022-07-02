console.log('DOM');
// 1
const curr = document.querySelector('.js-curr');
const deleteButton = curr.cloneNode();
deleteButton.textContent = "usuń z koszyka";
curr.parentNode.insertBefore(deleteButton, curr.nextElementSibling);

// 2
const allSiblings = curr.parentNode.children;
const siblingsArray = Array.from(allSiblings);
siblingsArray.forEach((element) => {
	element.classList.add("sibling");
});
// 3
const jsCurrParent = curr.parentNode;
jsCurrParent.nextElementSibling.title = "nextElementSibling";
// 4
const lastArticle = jsCurrParent.nextElementSibling.nextElementSibling;
const newP = lastArticle.lastElementChild.previousElementSibling.cloneNode();
lastArticle.insertBefore(newP, lastArticle.lastElementChild);

// 5
const list = curr.parentElement.parentElement
const newArticle = list.firstElementChild.children


