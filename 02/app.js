console.log('DOM');
const dataUrl = document.querySelectorAll('[data-url]');
console.log(dataUrl);

dataUrl.forEach(el => {
    const get = el.getAttribute('data-url');
    el.setAttribute('href', get);
})