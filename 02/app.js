console.log('DOM');

//1.  Wyszukaj wszystkie linki, które posiadają atrybut `data-url`.

const links = document.querySelectorAll('a[data-url]');
links.forEach(link => {
    // 2. Pobierz zawartość tego atrybutu do zmiennej.
    const url = link.getAttribute('data-url');

    // 3. Wartość tej zmiennej przypisz do atrybutu `href` wyszukanego elementu `</a>`.ref
    link.setAttribute('href', url);
});

// 4.. Sprawdź, czy każdy z linków działa prawidłowo, czyli czy przekierowuje do odpowiedniej strony. Zwróć uwagę na ostatni element na liście – on nie powinien Cię nigdzie przekierować.
links.forEach(link => {
    console.log(`Link: ${link.textContent}, href: ${link.getAttribute('href')}`);
});