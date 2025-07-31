console.log('DOM');
// W pliku ./app.js znajdziesz zmienną curr, która wskazuje na element o klasie .js-curr.

// Wykonaj poniższe zadania bez dodatkowych wyszukiwań. Po drzewie DOM możesz poruszać się tylko względem elementu ze zmiennej curr.


const curr = document.querySelector('.js-curr');
const articleEl = curr.parentElement;


// Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły.
if (curr) {
    const sectionEl = articleEl.parentElement;
    if (articleEl && sectionEl) {
        const cloneArticle = articleEl.cloneNode(true);
        sectionEl.insertBefore(cloneArticle, articleEl);
    }
}

// Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej curr. Element ten niech zawiera napis usuń z koszyka.
if (curr) {
    // console.log(articleEl);
    const newButton = document.createElement('button')
    newButton.innerText = 'Usun z koszyka';
    articleEl.appendChild(newButton);
}

// Do wszystkich elementów, które są rodzeństwem elementu o klasie .js-curr, dodaj klasę .siblings (wykorzystaj pętlę).

for (const child of articleEl.children) {
    if (curr != child) {
        child.classList.add('siblings')
    }
}


// Do następnego elementu o klasie .article, który występuje zaraz po rodzicu elementu o klasie .js-curr, dodaj atrybut title o wartości nextElementSibling.
if (curr) {
    const article2El = articleEl.nextElementSibling;
    if (article2El) {
        article2El.setAttribute('title', 'nextElementSibling')
    }
}


// Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>.

if (curr) {
    if (articleEl) {
        const firstSiblingEl = articleEl.nextElementSibling;
        // console.log(firstSiblingEl)
        const secondSiblingEl = firstSiblingEl.nextElementSibling
        // console.log(secondSiblingEl)
        if (secondSiblingEl && secondSiblingEl.hasChildNodes()) {
            // console.log(secondSiblingEl.hasChildNodes())
            const pEl = secondSiblingEl.children;
            const button = secondSiblingEl.children[2];
            // console.log(button)

            if (pEl) {
                const newParagraph = document.createElement('p')
                newParagraph.innerText = 'Nowy paragraf...';

                secondSiblingEl.insertBefore(newParagraph, button);

            }
        }
    }
}

