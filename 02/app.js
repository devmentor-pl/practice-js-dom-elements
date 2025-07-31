console.log('DOM');

const linkElements = document.querySelectorAll('[data-url]')
linkElements.forEach(el => {
	el.setAttribute('href', el.getAttribute('data-url'));
});