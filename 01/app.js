console.log('DOM');

const newestCommentItem = document.querySelector(
  ".comments__item.comments__item--newest"
)

const infoElements = newestCommentItem.querySelectorAll("[data-info]")

console.log(infoElements.length)