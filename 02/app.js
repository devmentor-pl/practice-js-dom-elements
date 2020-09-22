const links = document.querySelectorAll("a[data-url]");

if (links) {
  links.forEach((link) => {
    const url = link.dataset.url;
    link.setAttribute("href", url);
  });
}
