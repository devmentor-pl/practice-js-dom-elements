console.log('DOM');

const links = document.querySelectorAll('[data-url]');

if(links.length !== 0) {
    links.forEach(function(item) {
        let itemAttribute = item.getAttribute('data-url');
        item.setAttribute('href',itemAttribute);
    })
}