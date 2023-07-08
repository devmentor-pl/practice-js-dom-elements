console.log('DOM');


const linkItems = document.querySelectorAll('[data-url]');

if (linkItems) {
  linkItems.forEach (function (element) {
    attrib = element.getAttribute('data-url');
    element.setAttribute('href', attrib);
  });
}




