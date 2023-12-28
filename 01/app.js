console.log("DOM");

const el = document.querySelector(".comments__item.comments__item--newest");
console.log("Two class element", el);

if (el) {
  const elData = el.querySelectorAll("[data-info]");
  console.log(elData);
  console.log(elData.length);
}
