console.log('DOM');

const curr = document.querySelector('.js-curr');
let parent = curr.parentElement;
let grandpa = parent.parentElement;

// Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla wyszukanego w zmiennej `curr` elementu. Element ten niech zawiera napis `usuń z koszyka`.
let btn1 = document.createElement('button');
btn1.innerText = `usuń z koszyka`;
parent.appendChild(btn1);

//dla wszystkich elementów, które są rodzeństwem dla elementu o klasie `.js-curr` dodaj klasę `.siblings` (wykorzystaj pętlę)
[ ...parent.children ].map((a) => a.classList.add('siblings'));

//dla następnego elementu o klasie `.article` względem rodzica dla elementu o klasie `.js-curr` dodaj atrybut `title` o wartości `nextElementSibling`.
let nextParentSibling = parent.nextElementSibling;
nextParentSibling.title = 'nextElementSibling';

//do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`
let lastParentSibling = grandpa.lastElementChild;
let paragraph1 = document.createElement('p');
paragraph1.classList.add('article__description');
paragraph1.innerText =
	'!!!! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium omnis, velit dignissimos impedit cumque eveniet minima repudiandae asperiores magnam mollitia.';
let lastbtn = lastParentSibling.lastElementChild;
lastParentSibling.insertBefore(paragraph1, lastbtn);

//dodaj kolejny artykuł do listy (jako pierwszy), który będzie miał tą samą strukturę co pozostałe artykuły.
let article = document.createElement('article');
article.classList.add('articles__item');
article.classList.add('article');

let header = document.createElement('h1');
header.innerText = 'ten nowy...';
header.classList.add('article__title');
article.appendChild(header);

let paragraph2 = document.createElement('p');
paragraph2.classList.add('article__description');
paragraph2.innerText =
	'!!!!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolorum aspernatur dignissimos ipsa dolor? Cupiditate illum quibusdam explicabo facere minus.';
article.appendChild(paragraph2);

let btn2 = document.createElement('button');
btn2.classList.add('article__btn');
btn2.innerText = 'Kupuje!';
article.appendChild(btn2);

grandpa.insertBefore(article, grandpa.childNodes[0]);
