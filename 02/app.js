console.log('DOM');

const linkElements = document.querySelectorAll('a[data-url]');
if(linkElements){
    linkElements.forEach(function(link){
        const url = link.getAttribute('data-url');
        link.setAttribute('href', url)
    }
)};