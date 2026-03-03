// console.log('DOM');

const curr = document.querySelector('.js-curr');

if (curr) {
	const parent = curr.parentElement;

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'usuń z koszyka';
	parent.appendChild(deleteBtn);

	[...parent.children].forEach(el => {
		if (el !== curr) el.classList.add('siblings');
	});

	parent.nextElementSibling.setAttribute('title', 'nextElementSibling');

	const lastArticle = parent.parentElement.lastElementChild;
	const p = document.createElement('p');
	p.textContent = 'Dodatkowy paragraf';
	lastArticle.insertBefore(p, lastArticle.querySelector('button'));

	const newArticle = parent.cloneNode(true);
	const newCurrBtn = newArticle.querySelector('.js-curr');
	if (newCurrBtn) newCurrBtn.classList.remove('js-curr');
	parent.parentElement.insertBefore(newArticle, parent);
}
