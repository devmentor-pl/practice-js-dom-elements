console.log("DOM");

const curr = document.querySelector(".js-curr");

//1
const removeButtonElement = document.createElement("button");
removeButtonElement.textContent = "Usuń z koszyka";

if (curr) {
	curr.parentElement.appendChild(removeButtonElement);
}

//2

if (curr) {
	const siblings = [...curr.parentElement.children];

	siblings.forEach((item) => {
		if (siblings !== curr) {
			item.classList.add("siblings");
		}
		console.log(item);
	});
}

//3
var nextArticle = curr.parentNode.nextElementSibling.querySelector(".article");
if (nextArticle) {
	nextArticle.title = "nextElementSibling";
}
// dlaczego zwraca null ?

//4

const lastArticleElement = document.querySelector(".articles__item:last-child");

const paraElement = document.createElement("p");
paraElement.textContent = "Nowy paragraf";

const lastButton = lastArticleElement.querySelector(".article__btn:last-child");

lastArticleElement.insertBefore(paraElement, lastButton);

//5

const newArticle = document.createElement("article");
newArticle.className = "articles__item article";
newArticle.innerHTML = `<h1 class="article__title">Nowy artykuł</h1>
            <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p>
            <button class="article__btn js-curr">Kupuję!</button>`;
console.log(newArticle);

const articleInSection = document.querySelector(".articles");

articleInSection.insertBefore(newArticle, articleInSection.firstElementChild)
