console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
    const articleWithCurr = curr.parentElement;

    // 1
    
    const btnEl = document.createElement('button');
    btnEl.innerText = 'Usuń z koszyka';
    articleWithCurr.appendChild(btnEl);

    // 2
    
    const children = articleWithCurr.children;
    for (let i=0; i<children.length; i++){
        if (!children[i].classList.contains("js-curr"))    
        children[i].classList.add('siblings');
    }

    // 3

    const nextArticle = articleWithCurr.nextElementSibling;
    nextArticle.title = 'nextElementSibling';

    // 4

    const lastArticle = articleWithCurr.nextElementSibling.nextElementSibling;
    const btnInLastArticle = lastArticle.children[lastArticle.children.length -1];
    const pElement = document.createElement('p');
    pElement.innerText = 'Dodatkowy paragraf';
    lastArticle.insertBefore(pElement, btnInLastArticle);

    // 5
    
    const cloneArticle = articleWithCurr.cloneNode(true);
    const parentArticle = articleWithCurr.parentElement;
    parentArticle.insertBefore(cloneArticle, articleWithCurr)
}

