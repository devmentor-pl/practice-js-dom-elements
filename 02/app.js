console.log('DOM');

const links = document.querySelectorAll('[data-url]');

if(links !== null) {
    links.forEach(function(item) {
        let x = item.getAttribute('data-url');
        item.setAttribute('href',x);
    })
}