console.log('DOM');

const liElements = document.querySelectorAll('a[data-url');


liElements.forEach(function (item) {
    const dataUrl = item.getAttribute('data-url');
    item.setAttribute('href', dataUrl);
})
