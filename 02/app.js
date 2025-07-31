console.log('DOM');
const links = document.querySelectorAll('[data-url]');
if (links) {
    links.forEach(function (el) {
        const dataAttr = el.dataset.url;
        el.setAttribute('href', dataAttr);
    });
};