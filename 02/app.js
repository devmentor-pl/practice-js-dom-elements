const dataUrl = document.querySelectorAll("[data-url]");
const links = document.querySelectorAll("a");
const arrLinks = Array.from(links);

if (dataUrl) {
	arrLinks.forEach((element) => {
		if (element.textContent !== "null") {
			const dataValue = element.dataset.url;
			element.setAttribute("href", dataValue);
		}
	});
}
