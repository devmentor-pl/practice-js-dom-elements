console.log('DOM');

const linksWithDataUrl = document.querySelectorAll('a[data-url]');

linksWithDataUrl.forEach(function(link) {
  const dataUrl = link.getAttribute('data-url');
  if (dataUrl) {
    link.setAttribute('href', dataUrl)
  }
})
