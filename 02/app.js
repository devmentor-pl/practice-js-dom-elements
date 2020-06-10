console.log('DOM');


// Kolejny wyzwaniem będzie wyszukanie wszystkich linków,
// które posiadają atrybut `data-url`.
// Następnie należy pobrać zawartość tego atrybutu do zmiennej.

const links = [...document.querySelectorAll('a[data-url]')];
console.log(links);


links.forEach(el => {
  let link = el.getAttribute('data-url');
  return el.href = link;
});
