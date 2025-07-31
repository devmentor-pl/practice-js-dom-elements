console.log("DOM");

const links = document.querySelectorAll("a[data-url]");

const urls = Array.from(links)
  .map((link) => link.getAttribute("data-url"))
  .filter((url) => url !== null);

for (let i = 0; i < urls.length; i++) {
  links[i].setAttribute("href", urls[i]);
}
