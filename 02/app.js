console.log('DOM');

// Wyszukaj wszystkie linki, które posiadają atrybut data-url.
const linkList = document.querySelectorAll('[data-url]');

console.log(linkList);

// Pobierz zawartość tego atrybutu do zmiennej.
const linkListValue = linkList.forEach(function(value) {
    const getAttributeValue = value.getAttribute('data-url', value);
    const setAttributeValue = value.setAttribute('href', getAttributeValue);
    console.log(setAttributeValue);
})