console.log("DOM");

const links = document.querySelectorAll("a[data-url]");
console.log(links);

links.forEach(function (link) {
	const url = link.dataset.url;
	console.log(url);

	link.setAttribute("href", url);
	console.log(links);
});
