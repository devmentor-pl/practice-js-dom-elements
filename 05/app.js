console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1.  Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej `curr`. Element ten niech zawiera napis `usuń z koszyka`.
const newButton = document.createElement('button');
newButton.textContent = 'usuń z koszyka';
curr.parentElement.appendChild(newButton);

// 2. Do wszystkich elementów, które są rodzeństwem elementu o klasie `.js-curr`, dodaj klasę `.siblings` (wykorzystaj pętlę).
const childElements = Array.from(curr.parentElement.children);

childElements.forEach((element) => {
	if (element !== curr) {
		element.classList.add('siblings');
	}
});

// 3. Do następnego elementu o klasie `.article`, który występuje zaraz po rodzicu elementu o klasie `.js-curr`, dodaj atrybut `title` o wartości `nextElementSibling`.
const siblingElement = curr.parentElement.nextElementSibling;
siblingElement.title = 'nextElementSibling';

// 4. Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem`<button/>`.
const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling;
const button = lastArticle.children[lastArticle.children.length - 1];
const p = document.createElement('p');
p.textContent = 'lorem ipsum lorem lorem lalala';
lastArticle.insertBefore(p, button);

// 5. Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strukturę, co pozostałe artykuły.
const nextArticle = curr.parentElement.cloneNode(true);
curr.parentElement.parentElement.insertBefore(nextArticle, curr.parentElement);
