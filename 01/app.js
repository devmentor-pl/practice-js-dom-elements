console.log('DOM');

const UlElement = document.querySelector('ul');
if (UlElement) {
  const classElement = UlElement.querySelector(
    '.comments__item.comments__item--newest'
  );
  const dataInfo = classElement.querySelectorAll('[data-info]');
  console.log(dataInfo.length);
}
