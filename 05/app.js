console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr) {
    const currParent = curr.parentElement;
    const buttonSibling = document.createElement('button');

    buttonSibling.innerText = 'usuń z koszyka';
    currParent.appendChild(buttonSibling);


    if(currParent.hasChildNodes()) {
        const children = currParent.children;
        if(children.length > 1) {
            [...children].forEach(sibling => {
                if(!sibling.classList.contains('js-curr')) {
                    sibling.classList.add('siblings');
                }
            });
        }
    }


    const articleSibling = currParent.nextElementSibling;
    if(articleSibling) {
        articleSibling.setAttribute('title', 'nextElementSibling');
    }

    const section = currParent.parentElement;
    if(section) {
        const p = document.createElement('p');
        const lastArticle = section.lastElementChild;

        const buttonOfLastArticle = lastArticle.lastElementChild;

        lastArticle.insertBefore(p, buttonOfLastArticle);
    }


    const currParentClone = currParent.cloneNode(true);
    section.insertBefore(currParentClone, currParent)

}