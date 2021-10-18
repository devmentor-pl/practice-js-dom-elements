const dataUrl = document.querySelectorAll('[data-url]');

dataUrl.forEach(function(element) { 

    let link = element.getAttribute('data-url');
    element.setAttribute('href', link);
});