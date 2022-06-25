console.log("DOM");
const comment = document.querySelector(".comments__item.comments__item--newest");
if (comment) {
	const dataset = comment.querySelectorAll("[data-info]");
	console.log("Liczba elementów posiadających atrybut data-info: " + dataset.length);
}
