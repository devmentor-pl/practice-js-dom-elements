console.log('DOM');

const linksList = document.querySelectorAll('[data-url]');

linksList.forEach(el => {
  const url = el.dataset.url;
  el.setAttribute('href', url);
})