console.log("DOM");

const ulElement = document.querySelector(
  ".comments__item.comments__item--newest"
);

if (ulElement) {
  const dateInfoElements = ulElement.querySelectorAll("[data-info]");
  console.log(`The elemnts with data-info are ${dateInfoElements.length}`);
}