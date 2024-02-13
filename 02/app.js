const linksList = document.querySelectorAll("[data-url");
linksList.forEach(function (element) {
  if (element.hasAttribute("data-url")) {
    const dataAttr = element.getAttribute("data-url");
    element.setAttribute("href", dataAttr);
  }
});
