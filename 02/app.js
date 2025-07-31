const allLinksWithDataUrl = document.querySelectorAll('a[data-url]');

allLinksWithDataUrl.forEach(link => {

    const url = link.getAttribute('data-url');

    if (url) {
        link.setAttribute('href', url);
    } else {
        console.log('Brak dla elementu {link.textContent} atrybutu data-url');
    }
    
});



