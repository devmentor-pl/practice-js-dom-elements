console.log('DOM');

const curr = document.querySelector('.js-curr');
if(curr){
    const parent = curr.parentElement;
    const btn = document.createElement('button');
    btn.innerText = 'usuń z koszyka';
    parent.appendChild(btn);

    for(let child of parent.children){
        child.classList.add('siblings');
    }

    const parentSibling = parent.nextElementSibling;
    parentSibling.setAttribute('title', 'nextElementSibling');
    
    const parentSibling2 = parentSibling.nextElementSibling;
    const p = document.createElement('p');
    p.innerText = 'paragraph';
    parentSibling2.insertBefore(p, parentSibling2.lastElementChild);

    const cloneArticle = parentSibling2.cloneNode(true);
    const articlesParent = parent.parentElement;
    articlesParent.insertBefore(cloneArticle, articlesParent.firstElementChild);
 
}
