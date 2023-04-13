console.log('DOM');

const aElements = [...document.querySelectorAll('a')];
if(aElements) {
    aElements.forEach(function(el) {
        if(el.hasAttribute('data-url')) {
            el.setAttribute('href', el.getAttribute('data-url'))
        }
    })
}
