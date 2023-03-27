console.log('DOM');

const curr = document.querySelector('.js-curr');
const removeBtn = document.createElement('button');
removeBtn.textContent = 'remove from cart';

const pItem = document.createElement('p');
pItem.textContent = 'hello its me';

const currParent = curr.parentNode;
const grandParent = currParent.parentNode;

const parentSibling = currParent.nextSibling;
parentSibling.nextSibling.setAttribute('title', 'nextElementSibling');

const lastArticle = grandParent.lastElementChild;
const lastArticleBtn = lastArticle.lastElementChild;
const getSiblings = (element, parent) => {
	const children = [...parent.children];

	return children.filter(child => child !== element);
};

const siblingsArr = getSiblings(curr, currParent);

siblingsArr.forEach(item => item.classList.add('sibling'));

currParent.insertBefore(removeBtn, curr);

lastArticle.append(pItem);
lastArticleBtn.before(pItem);
