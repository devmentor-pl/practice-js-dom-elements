console.log('DOM');

const curr = document.querySelector('.js-curr');
const parentCurr = curr.parentElement;

//1
if(curr){
    const buttonBro = document.createElement('button');
    buttonBro.innerText = 'Usuń z koszyka';

    parentCurr.appendChild(buttonBro);

//2
const childrenArray = parentCurr.children;
const newChildArray = Array.from(childrenArray);

newChildArray.forEach(function(element){
    element.classList.add('sibilings');
});
}

//3
const nextArticle = parentCurr.nextElementSibling;
if(nextArticle){
    nextArticle.title= 'nextElementSibling';
}

//4
const lastArticle = nextArticle.nextElementSibling;
if(lastArticle){

const newP = document.createElement('p');
newP.innerText = 'New paragraph before button';

const lastElementLastArticle = lastArticle.lastElementChild;

lastArticle.insertBefore(newP,lastElementLastArticle);

}

//5
const sectionElement = parentCurr.parentElement;
if(sectionElement){

const newArticle = parentCurr.cloneNode(true);
sectionElement.insertBefore(newArticle,parentCurr);

}




