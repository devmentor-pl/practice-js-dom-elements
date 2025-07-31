console.log('DOM');

const links = document.querySelectorAll('[data-url]');
links.forEach(function (element) {
    const attribute = element.dataset.url;
    element.setAttribute('href', attribute);
});