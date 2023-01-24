console.log("DOM");

const commentsElement = document.querySelector(
	".comments__item",
	".comments__item--newest"
);
console.log(commentsElement);

if (commentsElement) {
	const dataElements = commentsElement.querySelectorAll("[data-info]");
	console.log(dataElements);
	console.log(dataElements.length);
}
