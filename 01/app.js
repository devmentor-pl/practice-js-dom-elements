console.log("DOM");

const comment = document.querySelector(
  ".comments__item.comments__item--newest"
);

const infos = comment.querySelectorAll("[data-info");

if (infos !== null) {
  console.log(infos.length);
}
