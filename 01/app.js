const comments = document.querySelector(
  ".comments__item.comments__item--newest"
);

if (comments) {
  const elements = comments.querySelectorAll("[data-info]");

  console.log(elements.length);
}
