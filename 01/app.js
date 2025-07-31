console.log('DOM');

const commentsItem = document.querySelector('.comments__item ', '.comments__item--newest')
const DataInfoElements = commentsItem.querySelectorAll('[data-info]')
console.log(`znaleziono ${DataInfoElements.length} elementów wewnątrz elementu z tagiem ${commentsItem.nodeName}`)