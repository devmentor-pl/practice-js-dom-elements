console.log('DOM');

const links = document.querySelectorAll('a[data-url]');

links.forEach((element) => {
	const dataUrl = element.getAttribute('data-url');
	element.setAttribute('href', dataUrl);
});
