const dataUrl = document.querySelectorAll("[data-url]");
const dataValue = dataUrl[0].dataset.url;
const links = document.querySelectorAll("a");
const arrLinks = Array.from(links);

if (dataUrl) {
	arrLinks.forEach((element) => {
		if (element.textContent !== "null") {
			element.setAttribute("href", dataValue);
		}
	});
}
