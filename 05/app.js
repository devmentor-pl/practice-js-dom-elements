console.log('DOM');

const curr = document.querySelector('.js-curr');
if (curr) {
    const currParent = curr.parentElement;
    const articlesSection = currParent.parentElement;
    const articles = articlesSection.children;
    const lastArticle = articles[articles.length - 1];
    const newArticle = lastArticle.cloneNode(true); // Used the last article as a template

    //1
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Usuń z koszyka';
    currParent.insertBefore(removeButton, curr.nextElementSibling);

    //2
    for (let child of currParent.children) {
        if (child !== curr) child.classList.add('siblings');
    }

    //3
    const nextArticle = currParent.nextElementSibling;
    if (nextArticle && nextArticle.classList.contains('article')) nextArticle.setAttribute('title', 'nextElementSibling');

    //4
    if (lastArticle) {
        const extraParagraph = document.createElement('p');
        extraParagraph.textContent = 'Extra paragraph';
        const btnInLast = lastArticle.querySelector('button');

        btnInLast ? lastArticle.insertBefore(extraParagraph, btnInLast) : lastArticle.appendChild(extraParagraph);
    }

    //5
    const titleEl = newArticle.querySelector('.article__title');
    if (titleEl) titleEl.textContent = 'JS - New Article';

    const descEl = newArticle.querySelector('.article__description');
    if (descEl) descEl.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    articlesSection.insertBefore(newArticle, articlesSection.firstElementChild);
} else {
    console.error('.js-curr elem not found');
}