console.log("DOM");

const liEl = document.querySelector(".comments__item.comments__item--newest");

if (liEl) {
  const hasDataInfo = liEl.querySelectorAll("[data-info]");
  console.log(hasDataInfo.length);
}
