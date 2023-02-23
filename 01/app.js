console.log("DOM");

const firstElement = document.querySelector(
  ".comments__item.comments__item--newest"
);
console.log(firstElement);

const dataInfoEl = firstElement.querySelectorAll("span");

console.log(dataInfoEl);

const spanArray = Array.from(dataInfoEl);

console.log(spanArray);

spanArray.forEach(function (element, index) {
  console.log(index, " wartość atrybutu data-info" + element.dataset.info);
});
