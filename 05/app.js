console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr !== null) {

    const newButton = document.createElement('button');
    const currParent = curr.parentElement;
    newButton.innerText = 'usun z koszyka';
    currParent.insertBefore(newButton, curr);

    const currParentChildsList = currParent.children;
    const parentChildsArr = Array.from(currParentChildsList);
    parentChildsArr.forEach(function(element) {
        if(element.className !== 'article__btn js-curr') {
            element.classList.add('siblings')
        }
    })

    const secondArticle = currParent.nextElementSibling;
    secondArticle.setAttribute('title','nextElementSibling');

    const thirdArticle = secondArticle.nextElementSibling;
    const thirdArticleChildsList = thirdArticle.children;
    const thirdArticleChildsListARR = [...thirdArticleChildsList];
    const lastChild = thirdArticleChildsListARR[2];
    const par = document.createElement('p');
    thirdArticle.insertBefore(par, lastChild);

    const section = curr.parentElement.parentElement;
    const articleClone = currParent.cloneNode(true);
    section.insertBefore(articleClone, currParent);
}