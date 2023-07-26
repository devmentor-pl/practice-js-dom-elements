console.log('DOM');

const listEl = document.querySelectorAll('li > [data-url]');

if (listEl) {   
  const first = listEl[0].dataset.url;
  const second = listEl[1].dataset.url;
  const third = listEl[2].dataset.url;
  
  listEl[0].setAttribute('href', first);
  listEl[1].setAttribute('href', second);
  listEl[2].setAttribute('href', third)
}

