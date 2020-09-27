console.log('DOM');

const linkList = [...document.querySelectorAll('a')];
const linkListUrl = linkList.filter(function(element) {
    return element.hasAttribute('data-url');
})

linkListUrl.forEach(function(element) {
    const link = element.getAttribute('data-url');
    
    element.setAttribute('href', link);
})