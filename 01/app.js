console.log('DOM');

const comments = document.querySelector('.comments__item.comments__item--newest');

if (comments) {
	const commentsItems = comments.querySelectorAll('[data-info]');
	console.log(`Zostały znalezione ${commentsItems.length} elementy.`);
}
