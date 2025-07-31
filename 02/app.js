console.log('DOM');
const linksList = document.querySelectorAll('[data-url]');
console.log(linksList)
if(linksList !== 0) {
    linksList.forEach(function(elem) {
        const href = elem.getAttribute('data-url');
        console.log(href)
        elem.setAttribute('href', href)
        console.log(elem)
    })
}
