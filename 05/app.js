console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {

    // 1
    const articleEl = curr.parentElement;

    const newButtonEl = document.createElement('button');
    newButtonEl.innerText = 'Usuń z koszyka';
    articleEl.appendChild(newButtonEl);


    // 2
    if (articleEl.hasChildNodes()) {
        const childrenArticleCurr = articleEl.children;

        const arrChildrenArticleCurr = Array.from(childrenArticleCurr); // utworzenie tablicy z HTMLCollection zwracanej wcześniej z .children

        arrChildrenArticleCurr.forEach(function (el) {

            if (el !== curr) {
                el.classList.add('siblings')
            }
        })
    }


    // 3
    const nextArticleEl = articleEl.nextElementSibling;
    nextArticleEl.setAttribute('title', 'nextElementSibling');


    // 4
    const lastArticleEl = nextArticleEl.nextElementSibling;

    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'New Paragraph !!!';

    const childrenLastArticle = lastArticleEl.children;
    const arrChildrenLastArticle = Array.from(childrenLastArticle);

    lastArticleEl.insertBefore(newParagraph, arrChildrenLastArticle[2]);


    // 5

    const sectionEl = articleEl.parentElement;
    const cloneArticle = articleEl.cloneNode(true);

    sectionEl.insertBefore(cloneArticle, articleEl);

}
