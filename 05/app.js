console.log('DOM');

const curr = document.querySelector('.js-curr');


// - Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej `curr` elementu. Element ten niech zawiera napis `usuń z koszyka`.


if(curr.parentElement) {
     const nextButton = document.createElement('button');
     curr.parentElement.appendChild(nextButton);
     nextButton.innerText = 'usuń z koszyka';
}

// - dla wszystkich elementów, które są rodzeństwem dla elementu o klasie `.js-curr` dodaj klasę `.siblings` (wykorzystaj pętlę)

const parentJSCurr = curr.parentElement.children;
arrParentJSCurr = [...parentJSCurr];

arrParentJSCurr.forEach(function (elementClass) {
    if (elementClass !== curr) {
        elementClass.classList.add('sibilings')
    }
})




// - dla następnego elementu o klasie `.article` względem rodzica dla elementu o klasie `.js-curr` dodaj atrybut `title` o wartości `nextElementSibling`.


curr.parentElement.nextElementSibling.setAttribute(
    'title',
    'nextElementSibling'
);

// - do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>

const lastArticle = curr.parentElement.parentElement.lastElementChild;  //ostatni artykuł

const lastArticleElement = curr.parentElement.parentElement.lastElementChild.lastElementChild;  //ostatni element w artykule


if(lastArticleElement && lastArticleElement) {
    const newP = document.createElement('p');
    
    lastArticle.insertBefore(newP, lastArticleElement);
    }


// - dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.

const sectionElement = curr.parentElement.parentElement;

if(sectionElement && lastArticle) {
    const cloneLastArticle = lastArticle.cloneNode(true);

sectionElement.appendChild(cloneLastArticle);
}