console.log("DOM");

const linksEls = document.querySelectorAll("[data-url]");
linksEls.forEach((el) => {
  const link = el.dataset.url;
  el.setAttribute("href", link);
});
