const links = document.querySelectorAll("a[data-url]");

links.forEach((link) => {
  const url = link.dataset.url;
  link.setAttribute("href", url);
});
