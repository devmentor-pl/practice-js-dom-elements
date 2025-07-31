console.log('DOM');

const curr = document.querySelector('.js-curr');
console.log(curr);


/*Todo List

1.Utworzyć kolejny przycisk,będący rodzeństem dla elementu ze zmiennej 'curr',
element ten ma zawierać napis 'usuń z koszyka'.*/

const remove = document.createElement('button');
remove.innerText = 'usuń z koszyka';
console.log(remove);

curr.parentElement.appendChild (remove);



/*2.Dodaj klasę '.siblings' do wszystkich elementów klasy .'js-curr',
wykorzystując pętle.*/

const parent = curr.parentElement;
console.log(parent);

const children = parent.children;
console.log(children);

for(let i = 0; i<children.length; i++) {
    console.log(i);
    const item = children[i];
    console.log(item);
    if (curr !== item) {
    item.classList.add ('siblings');
    }
}



/*3.Do elementu o klasie '.article',który występuje po rodzicu elementu '.js-curr',
dodać atrybut 'title' o wartości 'nextElementSibling'.*/

const next = parent.nextElementSibling;
console.log(next);
next.setAttribute('title','nextElementSibling');


/*4.Dodaj dodatkowy paragraf do ostatniego artykuł i umieścić go przed znacznikiem '<button/>'.*/
const select = document.querySelector('p')

if(select) {
    const text = document.createElement('article');
    text.innerText = 'Some new article';
    curr.parentElement.appendChild (text);
    console.log(text);
}




/*5.Dodaj kolejny artykuł na początku listy , o takiej samej strukturze co pozostałe artykuły.*/

const newArticle = document.querySelector('article')
if(newArticle) {
    const nextArticle = newArticle.cloneNode(true);
    curr.parentElement.appendChild(nextArticle);
}
console.log(newArticle);





