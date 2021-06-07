console.log('DOM');


const curr = document.querySelector('.js-curr');
//Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej curr elementu. Element ten niech zawiera napis usuń z koszyka.
if (curr) {
    const newButton = document.createElement('button');
    newButton.innerText = 'usuń z koszyka';
    curr.parentElement.appendChild(newButton);


// dla wszystkich elementów, które są rodzeństwem dla elementu o klasie .js-curr dodaj klasę .siblings (wykorzystaj pętlę)

if(curr) {
    const parent = curr.parentElement.children;

    for (let i = 0; i < parent.length; i++) {
    curr.parentElement.children[i].classList.add('.sibling');
};
    console.log(curr.parentElement.children[i]);
}


// dla następnego elementu o klasie .article względem rodzica dla elementu o klasie .js-curr dodaj atrybut title o wartości nextElementSibling.

const newArticle = parentElement.nextElementSibling;
newArticle.setAttribute('title', 'nextElementSibing');

// do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>

const pElement = document.createElement('p');
pElement.innerText = 'jakiś nowy paragraf';
const last = newArticle.lastElementChild;
const button = last.querySelector('button');
last.insertbefore(p, button);


// dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły. //

const newArticle = document.createElement('article'); 
newArticle.className = 'article_item article';
newArticle.innerText = '<h1 class="article__title">JS - Zdarzenia</h1 class="article__btn"><p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p class="article__btn"> <button class="article__btn">Kupuję!</button>';
curr.parentElement.insertbefore(newArticle);

