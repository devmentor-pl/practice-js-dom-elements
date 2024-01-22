console.log("DOM");

const dataUrl = Array.from(document.querySelectorAll("[data-url]"));

const dataUrlValue = dataUrl.map(function (element) {
  return element.dataset.url;
});

dataUrl.forEach(function (element, index) {
  element.setAttribute("href", dataUrlValue[index]);
});
