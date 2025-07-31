console.log('DOM');

const attributeInLinks = document.querySelectorAll('[data-url]');
console.log(attributeInLinks);

[...attributeInLinks].forEach((el) =>
	el.setAttribute('href', el.getAttribute('data-url'))
);
