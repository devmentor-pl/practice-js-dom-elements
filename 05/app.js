console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr) {
        const article1El = curr.parentElement;

        newBtn = document.createElement('button');
        newBtn.innerText = 'usuń z koszyka';

        article1El.appendChild(newBtn);

        if(article1El && article1El.hasChildNodes()) {
            const children = article1El.children;

            for(i = 0; i < children.length; i++){
                children[i].classList.add('.siblings');
            }
        }

        const articleEl = article1El.nextElementSibling;
        if(articleEl) {
            articleEl.setAttribute('title', 'nextElementSibling');
        }

        const sectionEl = article1El.parentElement;

        if(sectionEl) {
            const lastArticle = sectionEl.lastElementChild;
            const newParagraph = document.createElement('p');
            const buttonEl = lastArticle.lastElementChild;

            lastArticle.insertBefore( newParagraph, buttonEl );

            const cloneArticle =  article1El.cloneNode(true);
            sectionEl.insertBefore( cloneArticle, article1El );

        }
}  






