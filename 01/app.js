console.log("DOM");

const element = document.querySelector(
  ".comments__item.comments__item--newest"
);

if (element) {
  const elementsInfoList = element.querySelectorAll(`*[data-info]`);

  console.log(`Found: ${elementsInfoList.length} elements`);
}
