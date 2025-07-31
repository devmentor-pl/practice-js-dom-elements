console.log('DOM');

const curr = document.querySelector('.js-curr');
const parentCurr = curr.parentElement;
const parentChildren = parentCurr.children;
const nextArticle = parentCurr.nextElementSibling;
const lastArticle = parentCurr.parentElement.lastElementChild;
const btnLastArt = lastArticle.querySelector('button');


//ad 1.
const newBtn = document.createElement('button');
newBtn.textContent='Usuń z koszyka';
parentCurr.appendChild(newBtn);

//ad 2.
if (parentChildren.length>0){
    for (let i=0; i<parentChildren.length;i++){    
        if (!parentChildren[i].classList.contains('js-curr')){
            parentChildren[i].classList.add('siblings');        
        }
    }
}

//ad. 3
nextArticle.setAttribute('title','nextElementSibling');

//ad. 4
const newP =  document.createElement('p');
newP.textContent='Lorem ipsum dolor ........';
lastArticle.insertBefore(newP,btnLastArt);

//ad. 5
const cloneArt = parentCurr.cloneNode(true); 
parentCurr.parentElement.insertBefore(cloneArt,parentCurr); 