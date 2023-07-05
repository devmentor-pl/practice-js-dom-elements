console.log('DOM');

const linksList = document.querySelectorAll('a');
const linksListHasUrl = [...linksList].filter(url => url.hasAttribute('data-url'));
if(linksListHasUrl.length > 0) {
    linksListHasUrl.forEach(url => {
        const href = url.getAttribute('data-url');
        url.setAttribute('href', href);
    });
};