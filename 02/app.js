console.log('DOM');

const aList = document.querySelectorAll('[data-url]');

if (aList){
    aList.forEach(function(aElement){
        const attr = aElement.getAttribute('data-url');
        aElement.setAttribute('href', attr);
    });
}