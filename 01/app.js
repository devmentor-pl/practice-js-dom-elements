console.log('DOM');

// Wyszukaj element, który posiada dwie klasy tj. `.comments__item` oraz `.comments__item--newest`.
const commentsElement = document.getElementsByClassName('comments__item comments__item--newest');
// console.log(commentsElement[0]);

Array.from(commentsElement).forEach(function () {
  console.log(commentsElement);
});
// Następnie przeszukaj ten element względem znaczników, które posiadają atrybut `data-info`.
//
// Wyświetl w konsoli ile tych elementów zostało znalezionych.


// console.log(document.querySelectorAll('.comments__item.comments__item--newest [data-info]').length);
