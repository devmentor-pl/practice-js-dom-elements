console.log('DOM');

const curr = document.querySelector('.js-curr');


const newButton = document.createElement('button');
newButton.textContent = 'Usuń z koszyka'
curr.insertAdjacentElement('afterend' , newButton);


const currSiblingsList = curr.parentElement.children

for(let i=0; i<currSiblingsList.length; i++) {

    if( !(currSiblingsList[i].classList.contains('js-curr')) ) {
        currSiblingsList[i].classList.add('siblings')
    }
}


const currParent = curr.parentElement;
currParent.nextElementSibling.setAttribute('title' , 'nextElementSibling');



const section = currParent.parentElement;
const newParagraph = document.createElement('p');
newParagraph.textContent = "jestem nowym paragrafem";

section.lastElementChild.lastElementChild.insertAdjacentElement('beforebegin' , newParagraph );


const newArticle = section.children[1].cloneNode(true);
newArticle.children[0].textContent = "Nowy artykuł"
newArticle.removeAttribute('title');

section.insertAdjacentElement('afterbegin' , newArticle);