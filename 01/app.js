console.log('DOM');


const element = document.querySelector('.comments__item.comments__item--newest');

if (element) {
  const count1 = element.querySelectorAll('[data-info]').length;
  console.log(count1)
};
