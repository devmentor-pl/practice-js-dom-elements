//
// 4. Do ostatniego artykułu dodaj dodatkowy paragraf
// i umieść go przed znacznikiem`<button/>`.
// 5. Na początku listy dodaj kolejny artykuł,
//     który będzie miał tę samą strukturę, co pozostałe artykuły.

const curr = document.querySelector('.js-curr');

const btn2 = document.createElement('button');

btn2.textContent = 'Usuń z koszyka';

// Dodaje element btn2 jako ostatnie dziecko elementu nadrzędnego curr.Oznacza to, że btn2 stanie
// się rodzeństwem(bratem) elementu curr, ale będzie ostatnim
//  elementem wśród dzieci elementu nadrzędnego curr

curr.parentNode.appendChild(btn2);

// 2 sposób:

// curr.parentNode.insertBefore(btn2, curr.NextSibling);

// ---------------------------

// Znajdź element z klasą .js-curr
const currentElement = document.querySelector('.js-curr');

if (currentElement) {
	// Znajdź rodzica elementu z klasą .js-curr
	const parentElement = currentElement.parentElement;

	if (parentElement) {
		// Przejdź przez wszystkie dzieci rodzica
		const children = parentElement.children;

		// Użyj pętli do przejścia przez wszystkie dzieci
		for (let i = 0; i < children.length; i++) {
			// Sprawdź, czy bieżące dziecko nie jest elementem z klasą .js-curr
			if (children[i] !== currentElement) {
				// Dodaj klasę .siblings do elementu
				children[i].classList.add('siblings');
			}
		}
	}
}

// -------------------------------

// if (currentElement) {
//   const nextElementSibling = currentElement.nextElementSibling;
//   if (nextElementSibling) {
//     nextElementSibling.setAttribute('title', 'nextElementSibling');
//   }
// }

// Znajdź element o klasie `.js-curr`
const currElement = document.querySelector('.js-curr');

// Jeśli element istnieje
if (currElement) {
	// Znajdź rodzica tego elementu
	const parentElement = currElement.parentElement;

	// Jeśli rodzic istnieje
	if (parentElement) {
		// Znajdź następny element rodzeństwa po rodzicu
		const nextSibling = parentElement.nextElementSibling;

		// Jeśli następny element rodzeństwa istnieje i ma klasę `.article`
		if (nextSibling && nextSibling.classList.contains('article')) {
			// Dodaj atrybut `title` o wartości `nextElementSibling`
			nextSibling.setAttribute('title', 'nextElementSibling');
		}
	}
}

// 4. Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`.

const lastArticle = document.querySelector('.article:last-of-type');

if (lastArticle) {
	const p = document.createElement('p');
	p.textContent = 'To jest nowy paragraf';

	const button = lastArticle.querySelector('button.article__btn');


	if (button) {
		// wstawia istniejący element (p) przed referencyjnym elementem (button) wewnątrz rodzica (lastArticle)
		// lastArticle.insertBefore(p, button);

    // wstawia istniejący element (p) bezpośrednio przed referencyjnym elementem (button)
    // Używana jest, gdy masz element już utworzony za pomocą document.createElement
		button.insertAdjacentElement('beforebegin', p);

		//     ta metoda wstawia HTML jako sąsiedni element bezpośrednio przed referencyjnym elementem (button).
		// Używana jest, gdy chcesz wstawić element HTML jako string, który zostanie przekształcony w DOM

		// button.insertAdjacentHTML('beforebegin', '<p>This is a new paragraph</p>');
	}
}

// 
  
document.addEventListener('DOMContentLoaded', function () {
	// Nowy artykuł
	const newArticle = document.createElement('article');
	newArticle.className = 'articles__item article';

	const newTitle = document.createElement('h1');
	newTitle.className = 'article__title';
	newTitle.textContent = 'JS - Nowy Artykuł';

	const newDescription = document.createElement('p');
	newDescription.className = 'article__description';
	newDescription.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.';

	const newButton = document.createElement('button');
	newButton.className = 'article__btn';
	newButton.textContent = 'Kupuję!';

	newArticle.appendChild(newTitle);
	newArticle.appendChild(newDescription);
	newArticle.appendChild(newButton);

	const articlesSection = document.querySelector('.articles');
	articlesSection.insertBefore(newArticle, articlesSection.firstChild);
});