const curr = document.querySelector('.js-curr');

const btnSibling = document.createElement('button');
btnSibling.textContent = 'Usuń z koszyka';

// 1.
curr.parentNode.insertBefore(btnSibling, curr.nextSibling);

// 2.
function newClassForSiblings(element, children) {
	const filteredSiblings = [...children].filter((child) => child !== element);
	filteredSiblings.forEach((el) => el.classList.add('siblings'));
}
newClassForSiblings(curr, curr.parentElement.children);

// 3.
curr.parentElement.nextElementSibling.setAttribute(
	'title',
	'nextElementSibling'
);

// 4.
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Content for paragraph';

const lastArticle =
	curr.parentElement.nextElementSibling.nextElementSibling.children;

lastArticle[1].parentNode.insertBefore(
	newParagraph,
	lastArticle[1].nextSibling
);

// 5.
const sectionParent = curr.parentElement;

const newArticle = document.createElement('article');
sectionParent.parentNode.insertBefore(newArticle, sectionParent);

const newSectionParent = curr.parentElement.previousElementSibling;

const newHeading = document.createElement('h2');
newHeading.textContent = 'JS new heading';
newSectionParent.appendChild(newHeading);

const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = `It's fun to use DOM.`;
newSectionParent.appendChild(anotherParagraph);

const anotherBtn = document.createElement('button');
anotherBtn.textContent = `I'm buying it!`;
newSectionParent.appendChild(anotherBtn);
