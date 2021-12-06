console.log('DOM');
const allLinks  = document.querySelectorAll('[data-url]');
// console.log(allLinks);
allLinks.forEach(function(element) { 
    const setLink = element.getAttribute('data-url');
    // console.log(setLink);
    element.setAttribute('href', setLink);
    });