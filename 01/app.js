const commentsItemNewest = document.querySelector('.comments__item.comments__item--newest');
const childrenOfP = commentsItemNewest.querySelectorAll('span');

console.log(
  'Zostało znalezionych elementów posiadających atrybut data-info w liczbie:',
  childrenOfP.length
);
