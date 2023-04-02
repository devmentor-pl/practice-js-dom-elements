console.log("DOM");

const item = document.querySelector(".comments__item.comments__item--newest");
if (item) {
  const dataInfoElements = document.querySelectorAll("[data-info]");
  console.log(
    `Znaleziono ${dataInfoElements.length} elementów z atrybutem [data-info]`
  );
}
