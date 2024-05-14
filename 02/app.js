const linksUrl = document.querySelectorAll('[data-url]');
linksUrl.forEach(element => {
   const urlAttr = element.getAttribute('data-url');
   element.setAttribute('href', urlAttr);
});
