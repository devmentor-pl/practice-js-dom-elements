console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentNode;
console.log(currParent)

const removeButton = document.createElement('button');
removeButton.innerText = 'usuń z koszyka';
currParent.appendChild(removeButton);

for(let i = 0; i < currParent.children.length; i++) {
   currParent.children[i].classList.add('siblings');
}

currParent.nextElementSibling.setAttribute('title', 'nextElementSibling');

const elementWithNewParagrph = currParent.parentNode.lastElementChild.lastElementChild.insertAdjacentHTML('beforebegin', '<p>DODATKOWY PARAGRAF</p>');

currParent.parentNode.insertAdjacentHTML('afterbegin', 
'<article><h1>NOWA SEKCJA</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p><button>Kupuje!</button></article>');
