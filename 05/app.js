console.log('DOM');

const curr = document.querySelector('.js-curr');
//Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej curr elementu. Element ten niech zawiera napis usuń z koszyka.
const newButton = document.createElement('button');

newButton.innerText = 'usuń z koszyka';
curr.parentElement.appendChild(newButton);

//dla wszystkich elementów, które są rodzeństwem dla elementu o klasie .js-curr dodaj klasę .siblings (wykorzystaj pętlę)
const childrenList = [...curr.parentElement.children]; 
childrenList.forEach(function(child) {
    if(child !== curr) {
        child.classList.add('siblings');
    }
})

//dla następnego elementu o klasie .article względem rodzica dla elementu o klasie .js-curr dodaj atrybut title o wartości nextElementSibling.
if(curr.parentElement.nextElementSibling) {
    curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');
}

//do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>
const lastArticle = curr.parentElement.parentElement.lastElementChild;
if (lastArticle) {
    const buttonChild = lastArticle.lastElementChild;

    if(buttonChild) {
        const newP = document.createElement('p');
        newP.innerText = 'New Paragraph';
        lastArticle.insertBefore(newP, buttonChild);
    }
}

//dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.
const newArticle = curr.parentElement.nextElementSibling.cloneNode(true);

if(newArticle) {
    newArticle.firstElementChild.innerText = 'JS - Obiekty';
}

curr.parentElement.parentElement.insertBefore(newArticle, curr.parentElement);