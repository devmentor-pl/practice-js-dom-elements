console.log('DOM');

const linksEl = document.querySelectorAll('a[data-url]');
linksEl.forEach(function(link, index) {
    const dataUrl = link.getAttribute('data-url');
    link.setAttribute('href', dataUrl)
})