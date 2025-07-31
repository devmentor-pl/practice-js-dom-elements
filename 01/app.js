console.log('DOM');

const comentsNewest = document.querySelector(
  '.comments__item.comments__item--newest'
);
if (comentsNewest) {
  console.log(comentsNewest);
  const commentLink = comentsNewest.querySelectorAll('[data-info]');
  console.log(
    `Zostały znalezione ${commentLink.length} elementy z atrybutem data-info w rodzicu commentsNewest`
  );
}
