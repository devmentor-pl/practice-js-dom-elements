console.log("DOM");

const curr = document.querySelector(".js-curr");

// NR 1

const newButton = document.createElement("button");
newButton.innerText = "Usuń z koszyka";

const article1 = curr.parentElement;

article1.appendChild(newButton);

// NR 2
const art1Children = article1.children;
console.log(art1Children);
const arrOfArt1 = Array.from(art1Children);

arrOfArt1.forEach(function (item) {
	return item.classList.add("siblings");
});

// NR 3

const article2 = article1.nextElementSibling;
// console.log(article2);
article2.setAttribute("title", "nextElementSibling");
console.log(article2);

// NR 4

const article3 = article2.nextElementSibling;
console.log(typeof article3);

const art3Children = article3.children;
console.log(art3Children);

const arrOfArt3Children = Array.from(art3Children);
// console.log(arrOfArt3Children);
// console.log(arrOfArt3Children[2]);

const art3Button = arrOfArt3Children[2];
console.log(art3Button);

const art3NewPara = document.createElement("p");

// Wstawienie paragrafu przed <button>
article3.insertBefore(art3NewPara, art3Button);

console.log(art3Children);

// NR 5

const generalSection = article1.parentElement
console.log(generalSection);

//stworzenie i dodanie artykułu
const article0 = document.createElement('article')
article0.classList.add('articles__item.article')
generalSection.insertBefore(article0, article1)
// console.log(generalSection);

//stworzenie i dodanie h1
const art0Heading = document.createElement('h1')
art0Heading.classList.add('article__title')
art0Heading.textContent = 'Dodatkowy 1 artykuł'
article0.appendChild(art0Heading)
// console.log(article0.children);

// stworzenie i dodanie paragrafu
const art0Para = document.createElement('p')
art0Para.classList.add('article__description')
art0Para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.'
article0.appendChild(art0Para)
// console.log(article0.children);

// stworzenie i dodanie <button>
const art0Button = document.createElement('button')
art0Button.classList.add('article__btn')
art0Button.textContent = 'Kupuję!'
article0.appendChild(art0Button)
// console.log(article0.children);










