console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
    const buttonDeleteProduct = document.createElement('button');
    buttonDeleteProduct.classList.add('article__btn');
    buttonDeleteProduct.classList.add('article__btn--deleteProduct');
    buttonDeleteProduct.innerText = 'Usuń z koszyka';

    const articleElement = curr.parentElement;
    articleElement.appendChild(buttonDeleteProduct)
    
    const childrenArticleElement = articleElement.children;
    for (let i = 0; i < childrenArticleElement.length; i++) {
        childrenArticleElement[i].classList.add('siblings');
    }

    const secondArticleElement = articleElement.nextElementSibling;
    secondArticleElement.setAttribute('title', 'nextElementSibling');

    const thirdArticleElement = secondArticleElement.nextElementSibling;
    const childrenThirdArticleElement = thirdArticleElement.children;
    const thirdButton = childrenThirdArticleElement[2];
    const newParagraph = document.createElement('p');
    thirdArticleElement.insertBefore(newParagraph, thirdButton);

    const sectionElement = articleElement.parentElement;
    const articleClone = articleElement.cloneNode(true);
    sectionElement.insertBefore(articleClone, articleElement)

}

