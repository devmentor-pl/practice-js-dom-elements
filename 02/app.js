console.log('DOM');

const linksWithDataUrl = document.querySelectorAll('a[data-url]');

linksWithDataUrl.forEach(link => {
    const url = link.getAttribute('data-url');
    link.setAttribute('href', url);
});