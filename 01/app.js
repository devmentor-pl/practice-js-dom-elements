const element = document.querySelector(
	".comments__item.comments__item--newest"
);
if (element) {
	const dataElement = element.querySelectorAll("[data-info]");
	console.log(dataElement.length);
}
