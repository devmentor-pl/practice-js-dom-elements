console.log('DOM');

const linkList = document.querySelectorAll('[data-url]');

linkList.forEach(function (item) {
	if (!item.hasAttribute('href')) {
		const hrefValue = item.dataset.url;
		item.setAttribute('href', hrefValue);
	}
});
