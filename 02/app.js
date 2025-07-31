const hasUrlList = document.querySelectorAll("[data-url]");

hasUrlList.forEach((item) => {
  item.setAttribute('href', item.getAttribute('data-url'));
})


