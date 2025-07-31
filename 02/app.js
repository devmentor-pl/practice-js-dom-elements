const linksList = document.querySelectorAll("[data-url]");
linksList.forEach(function (element) {
  const dataAttr = element.getAttribute("data-url");
  element.setAttribute("href", dataAttr);
});
