console.log("DOM");

const comment = document.querySelector(
  ".comments__item.comments__item--newest"
);

if (comment !== null) {
  const infos = comment.querySelectorAll("[data-info");

  console.log(infos.length);
}
