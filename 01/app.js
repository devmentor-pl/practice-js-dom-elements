const twoClassesEl = document.querySelector('.comments__item.comments__item--newest');

if (twoClassesEl) {
  const hasAttr = twoClassesEl.querySelectorAll("[data-info]");
  console.log(hasAttr.length);
}