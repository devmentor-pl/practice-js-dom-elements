const comments = document.querySelector(
  ".comments__item.comments__item--newest"
);

if (comments) {
  const elements = comments.querySelectorAll("[data-info]");

  if (elements) {
    console.log(elements.length);
  }
}
