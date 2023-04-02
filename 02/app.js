console.log("DOM");

const links = document.querySelectorAll("a[data-url]");
if (links) {
  links.forEach((link) => {
    if (link) {
      const url = link.getAttribute("data-url");
      link.setAttribute("href", url);
    }
  });
}
