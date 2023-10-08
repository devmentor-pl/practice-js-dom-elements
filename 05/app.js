console.log('DOM');
// Znajduje element o klasie ,js-curr
const curr = document.querySelector('.js-curr');
//Pobieram rodzica leementu curr
const currParent = curr.parentElement;
//Tworze przycisk 
const button = document.createElement('button');
button.innerText = 'Usuń z koszyka';
//Dodaje przycisk do rodzica elementu curr
currParent.append(button);

//Dodaje klase .siblings do wszystkich rodzenstw elementu curr
for (const element of currParent.children) {
    if (!element.classList.contains('js-curr')) {
        element.classList.add('siblings');
    }
}
//Ustawiam atrybut title dla nastepnego elementu o klasie .article po rodzicu curr
currParent.nextElementSibling.setAttribute('title', 'nextElementSibling');

//Tworze nowy paragraf
const newParagraph = document.createElement('p');
newParagraph.innerText = 'Nuper creatus paragraph!!';
//Znajduje ostatni przycisk
const newButton = currParent.parentElement.lastElementChild.querySelector('button');
//Wstawiam nowy paragraf przed przyciskiem
currParent.parentElement.lastElementChild.insertBefore(newParagraph, newButton);

//Skopiowalem artykul i wstawiam go na poczatku listy
const copiedArticle = currParent.cloneNode(true);
currParent.parentElement.insertBefore(copiedArticle, currParent);