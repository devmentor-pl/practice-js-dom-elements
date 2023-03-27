console.log('DOM');
const dataUrlList = document.querySelectorAll('[data-url]');
const urlsList = [];
dataUrlList.forEach(el => urlsList.push(el.getAttribute(`data-url`)));

dataUrlList.forEach(el => {
	const hrefValue = el.dataset.url;
	el.setAttribute('href', hrefValue);
});
