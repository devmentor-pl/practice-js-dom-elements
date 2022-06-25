console.log("DOM");

const links = document.querySelectorAll("[data-url]");
console.log(links);
links.forEach(function (el) {
	const link = el.getAttribute("data-url");
	el.setAttribute("href", link);
});
