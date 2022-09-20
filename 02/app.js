console.log('DOM');
/*Todo List*/

/*1.Wyszukanie linków z atrybutami data-url.*/

const links = document.querySelectorAll('a');
    console.log (links);

const arr = Array.from(links);
    console.log (arr);





/*2.pobranie zawartości tego atrybutu do zmiennej.*/

const dataAtrribute = arr[0].dataset.url;
const dataAtrributeMozilla = arr[1].dataset.url;
const dataAtrributeStack = arr[2].dataset.url;
console.log (dataAtrribute,dataAtrributeMozilla,dataAtrributeStack);




/*3.Przypisanie tej zmiennej do atrybutu href wyszukanego elementu <a/>.*/









/*4.Sprawdzenie,czy każdy z linków działa prawidłowo,czyli czy
przekierowuje do odpowiedniej strony.
Ostatni element na liście nie zawiera przekierowania.*/


