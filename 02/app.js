console.log('DOM');

const listEl = document.querySelectorAll('li > [data-url]');

  listEl.forEach(function(item) {
    const dataValue = item.dataset.url;
    item.setAttribute('href', dataValue)
  })

