console.log("DOM");
const element = document.querySelector(
  ".comments__item.comments__item--newest"
);
const elements = Array.from(element.querySelectorAll("[data-info]"));

console.log("Liczba takich elementów to: " + elements.length);
