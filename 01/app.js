console.log("DOM");
const comment = document.querySelector(
  ".comments__item, .comments__item--newest"
);
console.log(comment);

const commentWithDataset = comment.querySelectorAll("[data-info]");

console.log(commentWithDataset);
console.log(commentWithDataset.length);
