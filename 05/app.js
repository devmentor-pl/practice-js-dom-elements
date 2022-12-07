console.log('DOM');

const curr = document.querySelector('.js-curr');


// ad.1 Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej curr. Element ten niech zawiera napis usuń z koszyka.

const newButton = document.createElement('button');
newButton.innerText = "Usuń z koszyka"
curr.parentElement.appendChild(newButton);

// ad.2 Do wszystkich elementów, które są rodzeństwem elementu o klasie .js-curr, dodaj klasę .siblings (wykorzystaj pętlę).

const currParents = curr.parentElement.children;
const currParentArray = Array.from(currParents);
currParentArray.forEach(function (el) {
    if (el !== curr) {
        el.classList.add('siblings');
    }
})

// ad.3 Do następnego elementu o klasie .article, który występuje zaraz po rodzicu elementu o klasie .js-curr, dodaj atrybut title o wartości nextElementSibling.

const nextArtcl = curr.parentElement.nextElementSibling;
nextArtcl.setAttribute('title', 'nextElementSibling');

// ad.4 Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem <button/>.

const lastArtcl = curr.parentElement.parentElement.lastElementChild;
const lastArtclButton = curr.parentElement.parentElement.lastElementChild.lastElementChild;

const newPargf = document.createElement('p');
newPargf.innerText = 'New added text';

lastArtcl.insertBefore(newPargf, lastArtclButton);


// ad.5 Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły.

const firstArtcl = curr.parentElement;
const cloneArtcl = firstArtcl.cloneNode(true);
firstArtcl.parentElement.insertBefore(cloneArtcl, firstArtcl);