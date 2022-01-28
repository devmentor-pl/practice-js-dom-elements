console.log('DOM');

const curr = document.querySelector('.js-curr');

if(curr !== null) {

    const newButton = document.createElement('button');
    const currParent = curr.parentElement;
    newButton.innerText = 'usun z koszyka';
    currParent.insertBefore(newButton, curr);


    const currParentChildsList = currParent.children;
    const parentChildsArr = Array.from(currParentChildsList);
    for(let i=0; i<parentChildsArr.length-1; i++) {
        parentChildsArr[i].classList.add('siblings');
    }


    const secondArticle = currParent.nextSibling.nextSibling;
    secondArticle.setAttribute('title','nextElementSibling');


    const thirdArticle = secondArticle.nextSibling.nextSibling;
    const thirdArticleChildsList = thirdArticle.children;
    const thirdArticleChildsListARR = [...thirdArticleChildsList];
    const lastChild = thirdArticleChildsListARR[2];
    const par = document.createElement('p');
    thirdArticle.insertBefore(par, lastChild);


    const section = curr.parentElement.parentElement;
    const articleClone = currParent.cloneNode(true);
    section.insertBefore(articleClone, currParent);
}



