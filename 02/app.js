console.log('DOM');

const links = document.querySelectorAll('a[data-url]');
links.forEach(link => {
    // mozna rowniez destrukturyzowac
    const url = link.dataset.url;
    link.href = url;
});
