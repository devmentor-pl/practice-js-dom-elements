console.log("DOM");

const dataUrl = document.querySelectorAll("[data-url");
dataUrl.forEach(function (el) {
  const url = el.dataset.url;
  if (!el.hasAttribute("href")) {
    el.setAttribute("href", url);
  }
});
