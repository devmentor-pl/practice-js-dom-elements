const hiddenElement = document.querySelector(
  ".comments__item.comments__item--newest"
);

const dataInfoElements = [...hiddenElement.querySelectorAll("[data-info]")];

console.log(dataInfoElements);
