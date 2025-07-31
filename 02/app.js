console.log("DOM");

const links = document.querySelectorAll("a[data-url]");

links.forEach(function (el) {
  el.setAttribute("href", el.dataset.url);
});
