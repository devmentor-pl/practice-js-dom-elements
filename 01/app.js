console.log("DOM");

const liEl = document.querySelector(".comments__item.comments__item--newest");
if (liEl) {
  const dataInfoEls = liEl.querySelectorAll("[data-info");
  console.log(dataInfoEls.length);
}
