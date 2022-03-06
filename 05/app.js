console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr) {
    const currParent = curr.parentElement;
    const newButton = document.createElement('button');
    newButton.innerText = 'Usuń z koszyka';
    currParent.appendChild(newButton);

    const currParentChildren = currParent.children;
    const arrChildren = [...currParentChildren];
    arrChildren.forEach(function(element) {
        element.classList.add('siblings');
    });
    
    const middleArticle = currParent.nextElementSibling;
    middleArticle.setAttribute('title', 'nextElementSibling');

    const lastArticle = middleArticle.nextElementSibling;
    const lastButton = lastArticle.lastElementChild;
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'Dodatkowy paragraf';
    lastArticle.insertBefore(newParagraph, lastButton);

    const newArticle = lastArticle.cloneNode(true);
    articleParent = currParent.parentElement;
    articleParent.insertBefore(newArticle, currParent);
}