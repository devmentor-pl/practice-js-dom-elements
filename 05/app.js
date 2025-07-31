console.log('DOM');

const curr = document.querySelector('.js-curr');



// 1 kolejny przycisk, rodzeństwem dla elementu o zmiennej curr z txt "usuń z koszyka"

const removeCart = document.createElement('button');
removeCart.textContent = 'Usuń z koszyka';

// dodaje przycisk

curr.parentNode.appendChild(removeCart); // appendChild doda element na końcu jako ostatnie dziecko

// lub bezpośrednio po nim curr.parentNode.insertBefore(removeCart, curr.nextSibling);


// 2 do js-curr dodaje klase .siblings

const siblings = curr.parentNode.children;

for (let i = 0; i < siblings.length; i++){
if (siblings[i]!== curr){
    siblings[i].classList.add('siblings');
}
}

// 3 do następnego elementu o klasie .article, po .js-curr dodaje atybut "title" o wartości 'nextEl..'

const afterParent = curr.parentNode;

const addTitle = afterParent.nextElementSibling;

if (addTitle && addTitle.classList.contains('article')) {
    addTitle.setAttribute('title', 'nextElementSibling')
}

// 4 Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`.

// ścieżka

const currArticle = curr.parentElement; // - jestem w artykuł 
const container = currArticle.parentElement; // - jestem w section
const lastArticle = container.lastElementChild; // - ostatni artykuł
const button = lastArticle.lastElementChild; // - przycisk jest ostatni 

const paragraph = document.createElement('p');
paragraph.textContent = 'Dodatkowy paragraf dodany';

lastArticle.insertBefore(paragraph, button); // dodaje paragraf

// 5 dodawnie na początku nowego artykuł

const mainArticle = curr.parentElement;
const mainContainer = mainArticle.parentElement;
const nextArticle = mainArticle.nextElementSibling; // tutaj nie wiem jak skopiować artykuł bez wcześniejszych operacji dlatego wybrałem 3, wykonałbym to jako powiewsze. 

const newArticle = nextArticle.cloneNode(true);

container.insertBefore(newArticle, container.firstElementChild);
