console.log('DOM');

const newestCommentItem = document.querySelector(
  ".comments__item.comments__item--newest"
)

if (newestCommentItem) {
  const infoElements = newestCommentItem.querySelectorAll("[data-info]")

  console.log(infoElements.length)
} else {
  console.error(
    "Classes .comments__item and .comments__item--newest does not exist"
  )
}



