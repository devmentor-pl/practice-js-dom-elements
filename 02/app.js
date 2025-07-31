console.log('DOM');

const linksList = document.querySelectorAll('[data-url')
console.log(linksList)

linksList.forEach(function (el) {
    const attr = el.getAttribute('data-url');
    el.setAttribute('href', attr)

});
