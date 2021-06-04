console.log('DOM');

//* Kolejny wyzwaniem będzie wyszukanie wszystkich linków, które posiadają atrybut data-url.

Następnie należy pobrać zawartość tego atrybutu do zmiennej.

Potem wartość tej zmiennej przypisać do atrybutu href wyszukanego elementu </a>.

Sprawdź czy każdy z linków działa prawidłowo tj. przekierowuje na odpowiednie strony. Zwróć uwagę na ostatni element na liście - on nie powinien Cię nigdzie przekierować.
//*

const linkEl = document.querySelectorAll ('data-url');


if(linkEl) {
    linkEl.forEach(function(element) {
        const elementContent = element.getAttribute ('date-url');
        element.setAttribute('href' , elementContent);
    } )
}

console.log(linkEl);
console.log (elementContent);