console.log('DOM');

const links = document.querySelectorAll('a[data-url]');


console.log(links);


links.forEach(function(link) {
    const url = link.getAttribute('data-url');
    link.setAttribute('href', url);
});