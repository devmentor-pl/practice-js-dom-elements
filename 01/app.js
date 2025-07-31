console.log('DOM');

const commentsNewest = document.querySelector('.comments__item.comments__item--newest');

if (commentsNewest) {
  const commentsNewestWithDataInfo = commentsNewest.querySelectorAll('[data-info]');
  console.log(`${commentsNewestWithDataInfo.length} elements found with data-info attribute.`);
};