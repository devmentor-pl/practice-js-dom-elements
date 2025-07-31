console.log("DOM");

const linksList = document.querySelectorAll("a[data-url]");

linksList.forEach((link) => {
  const href = link.dataset.url;
  link.setAttribute("href", href);
});
