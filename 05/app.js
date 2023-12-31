console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement('button');
button.textContent = 'usuń z koszyka';
curr.appendChild(button);

if (curr) {
    const siblings = Array.from(curr.parentNode.children);

    for (const sibling of siblings) {
        if (sibling !== curr) {
            sibling.classList.add('siblings');
        }
    }
}


/* do nastepnego elementu o klasie .article */
/* ktory wystepuje zaraz po rodzicu elementu o klasie .js-curr */

let nextArticleElement = curr.nextElementSibling;

while (nextArticleElement && !nextArticleElement.classList.contains('article')) {
    nextArticleElement = nextArticleElement.nextElementSibling;
}


if (nextArticleElement) {
    nextArticleElement.setAttribute('title', 'nextElementSibling');
} else {
    console.log("Brak następnego elementu o klasie .article");
}
