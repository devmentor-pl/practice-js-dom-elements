console.log('DOM');
//1. Przycisk z inną treścią
const curr = document.querySelector('.js-curr');
const currClone = curr.cloneNode(true);
const currParent = curr.parentElement;
currClone.textContent = 'Usuń z koszyka';

//2. .siblings do braci
currParent.insertBefore(currClone, curr);
const children = [...currParent.children];
children.forEach(function(item){
    if(item !== curr){
        item.classList.add('siblings');
    }
})

//3.brat rodica .curr 
const nextParent = currParent.nextElementSibling;
nextParent.setAttribute('title', 'nextElementSibling');

//4.dodatkowy paragraf pod buttonem do ostatniego artykułu
const grandParent = currParent.parentElement;
const lastArticle = grandParent.lastElementChild;
const lastArtChildren  = lastArticle.children;
const paragraphClone = lastArtChildren[1].cloneNode(true);
lastArticle.appendChild(paragraphClone);

//5. klon artykułów na początku listy
const articleCLone = lastArticle.cloneNode(true);
grandParent.insertBefore(articleCLone, currParent);
