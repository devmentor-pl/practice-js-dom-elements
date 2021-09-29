const dataUrl = document.querySelectorAll('[data-url]');

if(dataUrl) {
    dataUrl.forEach(function(element) { 

        let link = element.getAttribute('data-url');
        element.setAttribute('href', link);
    });
}
