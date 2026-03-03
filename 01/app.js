const el = document.querySelector('.comments__item.comments__item--newest');

if (el) {
	const items = el.querySelectorAll('[data-info]');

	console.log(`Liczba elementów z data-info: ${items.length}`);

	items.forEach(el => {
		console.log(el.dataset.info);
	});
}
