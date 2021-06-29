console.log('DOM');

const el1 = document.querySelector(".comments__item.comments__item--newest");

if(el1) {
  let arrOfElements = [...el1.querySelectorAll('span')];
  let filterArray = arrOfElements.filter(item => item.hasAttribute('data-info'))
  console.log(filterArray.length)
}
