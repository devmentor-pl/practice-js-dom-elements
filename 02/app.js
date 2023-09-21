const dataElements = document.querySelectorAll('[data-url]');
if (dataElements) {
  for (let i = 0; i < dataElements.length; i++) {
    const dataAttribute = dataElements[i].getAttribute('data-url');
    console.log(dataAttribute);
    dataElements[i].setAttribute('href', dataAttribute);
  }
}
