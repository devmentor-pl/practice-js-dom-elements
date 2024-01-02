console.log('DOM');

const linksData = document.querySelectorAll('a[data-url]');

linksData.forEach(function(link){
    const urlValue = link.getAttribute('data-url');

    link.setAttribute('href', urlValue);
});