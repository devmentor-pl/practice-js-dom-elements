console.log("DOM");

const linksList = document.querySelectorAll("a");

console.log(linksList);

const arr = Array.from(linksList);

const linksAttribute = arr.forEach(function (element) {
  if (!element.hasAttribute("data-url")) {
    element.setAttribute("href", "#");
  } else {
    const dataURL = element.getAttribute("data-url");
    element.setAttribute("href", dataURL);
  }
});
