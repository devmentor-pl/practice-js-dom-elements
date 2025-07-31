const liElement = document.querySelector(
  ".comments__item.comments__item--newest"
);
if (liElement) {
  const attrElement = liElement.querySelectorAll("[data-info]");
  console.log(
    `Znaleziono ${attrElement.length} elementy z atrybutem data-info`
  );
}
