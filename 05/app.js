console.log('DOM');

const curr = document.querySelector('.js-curr');

// (1) Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej `curr` elementu. Element ten niech zawiera napis `usuń z koszyka`.

const btnRemoveFromCart = document.createElement('button');
curr.after(btnRemoveFromCart);
btnRemoveFromCart.textContent = 'Usuń z koszyka';
console.log(btnRemoveFromCart)

// (2) dla wszystkich elementów, które są rodzeństwem dla elementu o klasie `.js-curr` dodaj klasę `.siblings` 
// (wykorzystaj pętlę)

const parent = curr.parentElement.children;

for (let i = 0; i < parent.length; i++) {
    if (!parent[i].classList.contains('js-curr')) {
    curr.parentElement.children[i].classList.add('siblings');
    };
    console.log(curr.parentElement.children[i]);
}

// (3) dla następnego elementu o klasie `.article` względem rodzica dla elementu o klasie `.js-curr` 
// dodaj atrybut `title` o wartości `nextElementSibling`.

curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');
console.log(curr)

// (4) do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`

const addedParagraph = document.createElement('p');
addedParagraph.textContent = 'Paragraf dodany w js przed znacznikiem button';
curr.parentElement.nextElementSibling.nextElementSibling.children[1].after(addedParagraph);
console.log(addedParagraph)

// (5) dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.

const addedArticle = document.createElement('article');
addedArticle.className = 'articles__item article';
addedArticle.innerHTML = `<h1 class='article__title'>JS - Artykuł dodany w js jako pierwszy</h1 class='article__btn'><p class='article__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p class='article__btn'><button class='article__btn'>Kupuję!</button>`;
curr.parentElement.before(addedArticle);
console.log(curr)
console.log(addedArticle)
