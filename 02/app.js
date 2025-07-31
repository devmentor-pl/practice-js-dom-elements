console.log('DOM');

const linksEl = document.querySelectorAll('[data-url]');
linksEl.forEach((link) => {
  const url = link.dataset.url;
  link.setAttribute('href', url);
});
