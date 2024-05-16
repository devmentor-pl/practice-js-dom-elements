console.log('DOM');
const allLinks = document.querySelectorAll('[data-url]');
allLinks.forEach(function(el){
    const tempStore = el.dataset.url;
    el.setAttribute('href', tempStore);
})


console.log(allLinks);