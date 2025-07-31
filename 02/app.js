console.log('DOM');

const hasDataUrl = document.querySelectorAll('[data-url]');
console.log(hasDataUrl);

if(hasDataUrl) {
    hasDataUrl.forEach(element => {
        element.setAttribute("href", element.getAttribute('data-url'));
    });
}