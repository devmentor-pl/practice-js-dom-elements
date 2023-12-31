console.log('DOM');

const curr = document.querySelector('.js-curr');

/* 1. Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu
 ze zmiennej curr. Element ten niech zawiera napis usuń z koszyka. */

 const button = document.createElement('button');
button.textContent = 'usuń z koszyka';
curr.appendChild(button);

/* 1. Do wszystkich elementów, które są rodzeństwem
 elementu o klasie .js-curr, dodaj klasę .siblings(wykorzystaj pętlę). */

 if (curr) {
    const siblings = Array.from(curr.parentNode.children);

    for (const sibling of siblings) {
        if (sibling !== curr) {
            sibling.classList.add('siblings');
        }
    }
}

/* 3. Do następnego elementu o klasie .article, który występuje zaraz po rodzicu elementu
 o klasie .js-curr, dodaj atrybut title o wartości nextElementSibling. */

let nextArticleElement = curr.parentNode.nextElementSibling;

while (nextArticleElement && !nextArticleElement.classList.contains('article')) {
    nextArticleElement = nextArticleElement.nextElementSibling;
}


if (nextArticleElement) {
    nextArticleElement.setAttribute('title', 'nextElementSibling');
} else {
    console.log("Brak następnego elementu o klasie .article");
}

/* 4. Do ostatniego artykułu dodaj dodatkowy paragraf i
 umieść go przed znacznikiem <button/>. */

 const lastArticleElement = curr.parentNode.nextElementSibling.nextElementSibling;
const buttonFromLastArticle = lastArticleElement.getElementsByClassName('article__btn')[0]; 
const newParagraph = document.createElement('p');

lastArticleElement.insertBefore(newParagraph, buttonFromLastArticle);

/* 5. Na początku listy dodaj kolejny
 artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły. */

const newArticleElement = document.createElement('article');
newArticleElement.classList.add('articles__items', 'article');

const newTitle = document.createElement('h1');
newTitle.textContent = 'Nowy Artykuł';
newTitle.classList.add('article__title');

const newParagraphElement = document.createElement('p');
newParagraphElement.classList.add('article__description');
newParagraphElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.'

const newButton = document.createElement('button');
newButton.classList.add('article__btn');
newButton.textContent = 'Kupuję!';


newArticleElement.appendChild(newTitle);
newArticleElement.appendChild(newParagraphElement);
newArticleElement.appendChild(newButton);

const articlesList = curr.parentNode.parentNode;

articlesList.insertBefore(newArticleElement, curr.parentNode);

