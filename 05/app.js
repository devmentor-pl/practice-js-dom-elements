console.log('DOM');

const curr = document.querySelector('.js-curr');

//1. Utworzenie i dodanie nowego przycisku jako ostatnie dziecko rodzica elementu curr 
const newButton = document.createElement('button');
newButton.textContent = 'Usuń z koszyka';
curr.parentNode.appendChild(newButton);

/*2. Dodanie klasy .siblings do rodzeństwa. Pobiera wszystkie dzieci rodzica elementu curr.
Przechodzi przez każde dziecko dodając klasę .siblings ,które nie są równorzędne elementowi curr. */

const siblings = curr.parentNode.children;
for (let sibling of siblings) {
    if (sibling !== curr) {
        sibling.classList.add('siblings');
    }
}

//3. 
const nextArticle = curr.parentNode.nextElementSibling.querySelector('.article');
if (nextArticle) {
    nextArticle.setAttribute('title', 'nextElementSibling');
}
const lastArticle = document.querySelector('articles__item:last-child');
if (lastArticle) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Dodatkowy paragraf przed przyciskiem.';
    lastArticle.insertBefore(newParagraph, lastArticle,querySelector('button'));
}
