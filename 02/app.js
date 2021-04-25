console.log('DOM');

// Kolejnym wyzwaniem będzie wyszukanie wszystkich linków, które posiadają atrybut `data-url`.

const dataUrl = document.querySelectorAll('[data-url]');
console.log(dataUrl)

dataUrl.forEach((el) => {

// Następnie należy pobrać zawartość tego atrybutu do zmiennej.

   const urlVariable = el.getAttribute('data-url');
   console.log(urlVariable)

// Potem wartość tej zmiennej przypisać do atrybutu `href` wyszukanego elementu `</a>`.

   el.setAttribute('href', urlVariable);
   console.log(el)

});

