console.log('DOM');
const linkList = document.querySelectorAll('[data-url]');

linkList.forEach(el => {
	const attribute = el.getAttribute('data-url');
	el.setAttribute('href', attribute);
});
