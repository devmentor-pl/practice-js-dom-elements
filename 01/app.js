console.log('DOM');

const commentClass = document.querySelector(".comments__item.comments__item--newest");

const attrComClass = commentClass.querySelectorAll("[data-info]");

attrComClass.forEach(function (el, index) {
  console.log(index, el);
})