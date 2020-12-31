console.log('DOM');
const linkList = document.querySelectorAll('[data-url]');

if(linkList) {
    linkList.forEach(function(element){
        const linkAttribute = element.getAttribute('data-url');
        
        element.setAttribute('href', linkAttribute);
    })
}