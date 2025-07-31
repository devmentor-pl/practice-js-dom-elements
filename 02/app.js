console.log('DOM');

const list = document.querySelectorAll('[data-url]')

list.forEach(function(element) {
    const attr = element.getAttribute('data-url')

    element.setAttribute('href', attr)
})