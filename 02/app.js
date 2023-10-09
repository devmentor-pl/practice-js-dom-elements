console.log('DOM');

const linksWithDataUrl = document.querySelectorAll('a[data-url]');
linksWithDataUrl.forEach(link => {
    const dataUrl = link.getAttribute('data-url');

    if(dataUrl) {
        link.setAttribute('href', dataUrl);
    }
});
