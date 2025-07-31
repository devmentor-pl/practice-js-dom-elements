console.log("DOM");

const pElement = document.querySelector(
  ".comments__item.comments__item--newest"
);

const dataAtt = pElement.querySelectorAll("[data-info]");

console.log(
  `Liczba elementów, które w elemencie o klasie ".comments__item" oraz ".comments__item--newest" posiadają atrybut "data-info", wynosi: ${dataAtt.length}`
);
