console.log('DOM');

const element = document.querySelector(
  '.comments__item.comments__item--newest'
);
console.log(element);

if (element) {
  const element2 = element.querySelectorAll('[data-info]');
  console.log(`Zostały znalezione ${element2.length} elementy`);
}