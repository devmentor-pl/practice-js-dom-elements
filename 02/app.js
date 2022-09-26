console.log('DOM');
/*Todo List*/

/*1.Wyszukanie linków z atrybutami data-url.*/

const links = document.querySelectorAll('a');
    console.log (links);

const arr = Array.from(links);
    console.log (arr);





/*2.pobranie zawartości tego atrybutu do zmiennej.*/
/*3.Przypisanie tej zmiennej do atrybutu href wyszukanego elementu <a/>.*/

const dataAtrribute = arr[0].setAttribute('href', arr[0].dataset.url)
const dataAtrributeMozilla = arr[1].setAttribute('href' , arr[01].dataset.url)
const dataAtrributeStack = arr[2].setAttribute('href' , arr[02].dataset.url)




/*4.Sprawdzenie,czy każdy z linków działa prawidłowo,czyli czy
przekierowuje do odpowiedniej strony.
Ostatni element na liście nie zawiera przekierowania.*/

function checkFunction () {
    console.log('Wszystkie linki działają prawidłowo');
}

checkFunction();


