console.log('DOM');

const linksData = document.querySelectorAll('a[data-url]');
const dataUrls = [];

linksData.forEach(function(link){
    const urlValue = link.getAttribute('data-url');
    dataUrls.push(urlValue);

    link.setAttribute('href', urlValue);
});



