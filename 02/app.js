console.log('DOM');
const dataUrl = document.querySelectorAll('[data-url]');
if(dataUrl) {
    dataUrl.forEach(function(el) {
        const href = el.getAttribute('data-url');
        el.setAttribute('href',href);
        console.log(el);
    })
}
