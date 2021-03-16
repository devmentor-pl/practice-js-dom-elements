console.log('DOM');

[ ...document.querySelectorAll('[data-url]') ].map((link) => {
	let hrefData = link.getAttribute('data-url');
	link.href = hrefData;
});
