console.log('DOM');

const dataUrlEl = document.querySelectorAll('[data-url]');
if (dataUrlEl) {
    dataUrlEl.forEach(function (element) {

        let attrName = element.getAttribute('data-url');

        element.setAttribute('href', attrName);
        //Działa, ale magia :D 
    })
}