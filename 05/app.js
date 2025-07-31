console.log('DOM');

const curr = document.querySelector('.js-curr');

// dodanie przycisku 
const deleteButton = document.createElement('button')
deleteButton.textContent = "usuń z koszyka"
curr.parentNode.insertBefore(deleteButton, curr.nextSibling);

// Do wszystkich elementów, które są rodzeństwem elementu o klasie .js-curr, dodaj klasę .siblings (wykorzystaj pętlę).

const newClassSiblings = curr.parentNode.children
for ( let i =0; i< newClassSiblings.length; i++ ){
    if (newClassSiblings[i] !== curr) {
        newClassSiblings[i].classList.add("siblings")
    }
}

// Do następnego elementu o klasie .article, który występuje zaraz po rodzicu elementu o klasie .js-curr, dodaj atrybut title o wartości nextElementSibling.

const art = curr.closest('article') 
const newArticle = art.nextElementSibling
if (newArticle && newArticle.classList.contains("article")) {
    newArticle.setAttribute('title', 'nextElementSibling')
}


// Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>.

const endArticle = document.querySelector('.article:last-child')
const addParagraf = document.createElement('p')
addParagraf.textContent ="Dodanie nowego paragrafu aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
endArticle.insertBefore(addParagraf, endArticle.querySelector('button'));


// Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły.

const newFirstArticle = document.querySelector('.article:first-child') 
const topArticle = newFirstArticle.cloneNode(true);

const articlesAdd = document.querySelector('.articles');
const firstArticle = articlesAdd.querySelector('.article:first-child');
articlesAdd.insertBefore(topArticle, firstArticle);