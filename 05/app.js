const curr = document.querySelector('.js-curr');

if(curr){
    const button = document.createElement('button')
    button.textContent = 'Usuń z koszuka'
    curr.appendChild(button)

    const siblings = Array.from(curr.parentNode.children);

    for (const sibling of siblings) {
        if (sibling !== curr) {
            sibling.classList.add('siblings');
        }
    }

    let nextArticleElement = curr.nextElementSibling;

    while (nextArticleElement && !nextArticleElement.classList.contains('article')) {
        nextArticleElement = nextArticleElement.nextElementSibling;
    }

    if (nextArticleElement) {
        nextArticleElement.setAttribute('title', 'nextElementSibling');
    }

    const lastArticleElement = curr.parentNode.nextElementSibling.nextElementSibling;
    const buttonFromLastArticle = lastArticleElement.querySelector('.article__btn');
    const newParagraph = document.createElement('p');

    lastArticleElement.insertBefore(newParagraph, buttonFromLastArticle);
}

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