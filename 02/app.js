const dataUrls = [...document.querySelectorAll("[data-url]")];

dataUrls.forEach((element) => {
  // element.getAttribute()
  console.log(element.dataset.url);
  element.setAttribute("href", element.dataset.url);
});

console.log(dataUrls);
