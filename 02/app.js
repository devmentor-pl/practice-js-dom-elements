console.log("DOM");

const allLinksEls = document.querySelectorAll("[data-url]");
console.log(allLinksEls);

allLinksEls.forEach((link) => {
	const urlLinks = link.getAttribute("data-url");
	console.log(urlLinks);

	link.setAttribute("href", urlLinks);
});

allLinksEls.forEach((link) => {
	const hrefValue = link.getAttribute("href");
	if (hrefValue !== null) {
		console.log(
			`link ${link.textContent} działa prawidłowo przekierowuje do ${hrefValue}`
		);
	} else {
		console.log(
			`link ${link.textContent} działa nieprawidłowo, ma niepoprawny URL`
		);
	}
});
