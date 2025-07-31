console.log('DOM');
const commentsItemAndItemNewest = document.querySelector(".comments__item, .comments__item--newest");
// console.log(commentsItemAndItemNewest);

const dataInfoElements = commentsItemAndItemNewest.querySelectorAll("[data-info]");
console.log(`I've found ${dataInfoElements.length} data-info elements.`);