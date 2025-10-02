console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1
const btn = document.createElement('button');
btn.innerText = 'Usuń z koszyka';
curr.after(btn);

// 2
const siblings = curr.parentElement.children;
const siblingsArr = Array.from(siblings);

siblingsArr.forEach((element) => {
	element !== curr ? element.classList.add('siblings') : '';
});

// 3
const nextArticle = curr.parentElement.nextElementSibling.setAttribute(
	'title',
	'nextElementSibling'
);

// 4
const p = document.createElement('p');
p.innerText = 'THIS IS A NEW PARAGRAPH';
const lastArticle = curr.parentElement.parentElement.lastElementChild;
lastArticle.insertBefore(p, lastArticle.lastElementChild);

// 5
const section = curr.parentElement.parentElement;
const clone = curr.parentElement.nextElementSibling.cloneNode(true);
section.prepend(clone);
