console.log("DOM");

const linkUrl = document.querySelectorAll("a[data-url]");



linkUrl.forEach(function (link) {
	const url = link.getAttribute("data-url")
	console.log(url);
	link.setAttribute("href", url);
});

