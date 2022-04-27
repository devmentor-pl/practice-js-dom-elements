console.log('DOM');

const links = document.querySelectorAll('[data-url]')
console.log(links)
links.forEach(function(element) {
    const attribute = element.getAttribute('data-url')
    element.setAttribute('href', attribute)
})

