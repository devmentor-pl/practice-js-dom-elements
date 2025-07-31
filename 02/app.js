console.log('DOM');

const link = document.querySelectorAll('[data-url]')



link.forEach(function(el){
    const attr = el.getAttribute('data-url');

    el.setAttribute('href', attr)
});