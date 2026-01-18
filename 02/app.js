console.log('DOM');

aList = document.querySelectorAll('[data-url]');

aList.forEach(element => {
  element.setAttribute('href', element.dataset.url);
});