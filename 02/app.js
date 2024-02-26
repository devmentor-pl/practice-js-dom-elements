console.log('DOM');

const searchAllLinks = document.querySelectorAll('[data-url]')
console.log(searchAllLinks)

searchAllLinks.forEach(function (element) {
    const attr = element.getAttribute('data-url')
    element.setAttribute('href', attr)
})