console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;
const currGrandParent = currParent.parentElement;

const siblingButton = document.createElement('button');
siblingButton.innerText = 'Usuń z koszyka';
currParent.appendChild(siblingButton);

const parentChildrenList = currParent.children;
const currAndSiblingsList = Array.from(parentChildrenList);

currAndSiblingsList.forEach(function(element){
    if(!element.className.includes('js-curr')){
        element.classList.add('siblings');
        console.log(element);
    }
})

const currFirstUncle = currParent.nextElementSibling;
currFirstUncle.setAttribute('title','nextElementSibling');

console.log(currParent);
console.log(currGrandParent);
console.log(currAndSiblingsList.length);
console.log(currAndSiblingsList);
console.log(currParent.nextElementSibling);