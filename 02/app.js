console.log('DOM');

const linkList = document.querySelectorAll('[data-url]');

if (linkList) {
	linkList.forEach(function (item) {
		const hrefValue = item.getAttribute('data-url');
		if (!item.hasAttribute('href')) {
			item.setAttribute('href', hrefValue);
		}
	});
}
