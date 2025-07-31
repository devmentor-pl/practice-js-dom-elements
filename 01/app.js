console.log('DOM');

const elWithClasses = document.getElementsByClassName('comments__item comments__item--newest');

elWithDataInfo = elWithClasses[0].querySelectorAll('[data-info]');

console.log(elWithDataInfo.length)
