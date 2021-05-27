console.log('DOM');
const dataUrl = document.querySelectorAll('[data-url]');
<<<<<<< HEAD
console.log(dataUrl);

dataUrl.forEach(el => {
    const get = el.getAttribute('data-url');
    el.setAttribute('href', get);
})
=======
if(dataUrl) {
    dataUrl.forEach(function(el) {
        const href = el.getAttribute('data-url');
        el.setAttribute('href',href);
        console.log(el);
    })
}
>>>>>>> c26d93d111fa91502aa5c69123ee5f25b9a30e9a
