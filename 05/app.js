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



let nextArticleElement = curr.parentNode.nextElementSibling;

while (nextArticleElement && !nextArticleElement.classList.contains('article')) {
    nextArticleElement = nextArticleElement.nextElementSibling;
}


if (nextArticleElement) {
    nextArticleElement.setAttribute('title', 'nextElementSibling');
} else {
    console.log("Brak następnego elementu o klasie .article");
}

const lastArticleElement = curr.parentNode.nextElementSibling.nextElementSibling;
const buttonFromLastArticle = lastArticleElement.querySelector('.article__btn');
const newParagraph = document.createElement('p');

lastArticleElement.insertBefore(newParagraph, buttonFromLastArticle);