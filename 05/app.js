console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
    /* Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej curr. Element ten niech zawiera napis usuń z koszyka. */
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'usuń z koszyka';
    curr.parentNode.appendChild(deleteButton);

    /* Do wszystkich elementów, które są rodzeństwem elementu o klasie .js-curr, dodaj klasę .siblings (wykorzystaj pętlę). */
    const siblings = Array.from(curr.parentNode.children);
    console.log(siblings);

    siblings.forEach(sibling => {
        if (sibling !== curr) {
            sibling.classList.add('siblings');
        }
    });

    /* Do następnego elementu o klasie .article, który występuje zaraz po rodzicu elementu o klasie .js-curr, dodaj atrybut title o wartości nextElementSibling. */
    const nextElement = curr.parentNode.nextElementSibling;
    if (nextElement.classList.contains('article')) {
        nextElement.setAttribute('title', 'nextElementSibling');
    }

    /* Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>. */
    const container = curr.parentNode.parentNode;
    const lastArticle = container.lastElementChild;
    const paragraph = document.createElement('p');
    paragraph.innerText =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';
    lastArticle.insertBefore(paragraph, lastArticle.lastElementChild);

    /* Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły. */
    const firstArticle = container.firstElementChild;
    const clonedArticle = firstArticle.cloneNode(true);
    container.insertBefore(clonedArticle, firstArticle);
}
