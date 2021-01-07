console.log('DOM');

const links = document.querySelectorAll('[data-url]');

links.forEach(function (link) {
    const href = link.getAttribute('data-url');
    link.setAttribute('href', href);
});
console.log(links);