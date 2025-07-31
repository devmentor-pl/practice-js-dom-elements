console.log("DOM");
const elCommentsItem = document.querySelector(
  ".comments__item.comments__item--newest"
);
if (elCommentsItem) {
  const dataInfoElements = elCommentsItem.querySelectorAll("[data-info]");
  console.log(`There are ${dataInfoElements.length} emelents.`);
}
