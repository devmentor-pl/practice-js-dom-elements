console.log('DOM');
const linkList = document.querySelectorAll('[data-url]');

linkList.forEach(function (link) {
	const url = link.getAttribute('data-url');
	link.setAttribute('href', url);
});
