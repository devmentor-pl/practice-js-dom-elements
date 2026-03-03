console.log('DOM');
const links = document.querySelectorAll('[data-url]');
console.log(links);

links.forEach(link => {
	const url = link.dataset.url;

	if (url) {
		link.href = url;
	}
});
