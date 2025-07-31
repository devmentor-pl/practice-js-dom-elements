console.log('DOM');

const links = document.querySelectorAll('[data-url]');
console.log(links);

links.forEach((el) => {
  const attribute = el.getAttribute('data-url');
  el.setAttribute('href', attribute);
});