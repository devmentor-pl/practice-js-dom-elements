console.log('DOM');

const links = document.querySelectorAll('[data-url]');

links.forEach(function(element) {
    const link = element.getAttribute('data-url');
    element.setAttribute('href', link);
})