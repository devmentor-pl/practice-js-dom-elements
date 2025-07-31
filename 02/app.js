console.log('DOM');

const link = document.querySelectorAll('[data-url]');

link.forEach(function(element) {
   const attr = element.getAttribute('data-url');
const dataset = element.dataset.url;

console.log(dataset)
element.setAttribute('href', attr)
});



console.log(link)