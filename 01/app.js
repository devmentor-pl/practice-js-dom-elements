console.log('DOM');

const itemsList = document.querySelector('.comments__item' && '.comments__item--newest');
console.log(itemsList);


if (itemsList !== null) {
  const itemsWithAtribb = itemsList.querySelectorAll('[data-info]');
  const len = itemsWithAtribb.length;
  console.log(`Znaleziono ${len} elementów z atrybutem data-info`);
}


// Wyszukaj element, który ma dwie klasy: .comments__item oraz .comments__item--newest.
// Następnie poszukaj w nim elementów, które posiadają atrybut data-info.
// Wyświetl w konsoli, ile takich elementów zostało znalezionych.

