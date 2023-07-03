console.log('DOM');

const linksList = document.querySelectorAll('a');
const linksListHasUrl = [...linksList].filter(url => url.hasAttribute('data-url'));
if(linksListHasUrl) {
    linksListHasUrl.forEach(url => {
        const href = url.getAttribute('data-url');
        url.setAttribute('href', href);
    });
};