console.log('DOM');
//Wyszukaj element, który ma dwie klasy: `.comments__item` oraz `.comments__item--newest`.
//Następnie poszukaj w nim elementów, które posiadają atrybut `data-info`.
//Wyświetl w konsoli, ile takich elementów zostało znalezionych.

const element = document.querySelector('.comments__item.comments__item--newest');
if(element) {
    const dataInfo = element.querySelectorAll('[data-info]');
    console.log(dataInfo.length);
}
