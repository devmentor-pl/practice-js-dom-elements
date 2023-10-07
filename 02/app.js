console.log('DOM');
/*
    1.  Wyszukaj wszystkie linki, które posiadają atrybut `data-url`.

2. Pobierz zawartość tego atrybutu do zmiennej.

3. Wartość tej zmiennej przypisz do atrybutu `href` wyszukanego elementu `</a>`.

4. Sprawdź, czy każdy z linków działa prawidłowo, czyli czy przekierowuje do odpowiedniej strony.
 Zwróć uwagę na ostatni element na liście – on nie powinien Cię nigdzie przekierować.   
*/

const linksWithDataUrl = document.querySelectorAll('a[data-url]');
linksWithDataUrl.forEach(link => {
    const dataUrl = link.getAttribute('data-url');

    if(dataUrl) {
        link.setAttribute('href', dataUrl);
    }
});
