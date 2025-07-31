console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Usuń z koszyka';

    curr.parentElement.appendChild(delBtn);

    const currSiblings = [...curr.parentElement.children];

    currSiblings.forEach(function (item) {
        if (!item.classList.contains('js-curr')) {
            item.classList.add('siblings');
        }
    })

    const secondArticle = curr.parentElement.nextElementSibling;

    if (secondArticle) {
        secondArticle.setAttribute('title', 'nextElementSibling')
    }

    const thirdArticle = curr.parentElement.nextElementSibling.nextElementSibling;

    if (thirdArticle) {
        const newParagraph = document.createElement('p');

        newParagraph.innerText = 'New paragraph before button';

        const articleBtn = curr.parentElement.nextElementSibling.nextElementSibling.lastElementChild;

        thirdArticle.insertBefore(newParagraph, articleBtn);
    }

    const section = curr.parentElement.parentElement;
    const sectionFirstChild = curr.parentElement.parentElement.firstElementChild;

    const newArticle = sectionFirstChild.cloneNode();

    const articleChildren = [...sectionFirstChild.children];

    articleChildren.forEach(function (item) {
        const children = item.cloneNode();
        newArticle.appendChild(children);
    })
    newArticle.children[0].innerText = 'Nowy artykuł';
    newArticle.children[1].innerText = 'Treść artykułu';
    newArticle.children[2].innerText = 'Przycisk';
    newArticle.children[3].innerText = 'Przycisk2';

    section.insertBefore(newArticle, sectionFirstChild)
    console.log(newArticle);
}