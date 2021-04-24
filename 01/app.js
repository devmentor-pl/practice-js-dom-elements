console.log('DOM');

// Wyszukaj element, który posiada dwie klasy tj. `.comments__item` oraz `.comments__item--newest`

const commentsItem = document.querySelector('.comments__item.comments__item--newest');

// Następnie przeszukaj ten element względem znaczników, które posiadają atrybut `data-info`.

const dataInfo = commentsItem.querySelectorAll('[data-info]');

console.log(commentsItem)
console.log(dataInfo)
console.log(`Znaleziono ${dataInfo.length} elementy z atrybutem data-info`);
