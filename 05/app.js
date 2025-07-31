const curr = document.querySelector('.js-curr');

// 
const newButton = document.createElement('button');
newButton.classList.add('article__btn');
newButton.textContent = 'usuń z koszyka'

curr.parentElement.insertBefore(newButton, curr.nextElementSibling);


// 
let sibling = curr.parentElement.firstElementChild;
while (sibling) {
  if (sibling !== curr) {
    sibling.classList.add('siblings');
  }
  sibling = sibling.nextElementSibling;
}


// 
const nextArticle = curr.closest('.article').nextElementSibling;
if(nextArticle && nextArticle.classList.contains('article')) {
    nextArticle.setAttribute('title', 'nextElementSibling');
}


// 
const lastArticle = document.querySelector('.articles__item:last-child');
const paragraph = document.createElement('p');
paragraph.textContent = 'Dodskowy paragraf.';
const button = lastArticle.querySelector('.article__btn');
lastArticle.insertBefore(paragraph, button);

// 
const newArticle = document.createElement('article');
newArticle.classList.add('articles__item', 'article');
const articlesSection = document.querySelector('.articles');
articlesSection.insertBefore(newArticle, articlesSection.firstElementChild);

newArticle.innerHTML = `
  <h1 class="article__title">JS- Nowy Artykuł</h1>
  <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p>
  <button class="article__btn">Kupuję!</button>
`;