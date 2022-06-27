console.log('DOM');

const showList = document.querySelectorAll('[data-url]')

showList.forEach(function(link) {
    const url = link.getAttribute('data-url');
    link.setAttribute('href', url);
});