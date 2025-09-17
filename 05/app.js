console.log('DOM');

const curr = document.querySelector('.js-curr');

const newBtn = document.createElement('button');
newBtn.innerText = 'usuń z koszyka';
curr.parentElement.appendChild(newBtn);

const parent = curr.parentElement;
[...parent.children].forEach(function(child){
    if (child !== curr){
        child.classList.add('sibling')
    }
});

const nextArticle = parent.nextElementSibling;
if(nextArticle && nextArticle.classList.contains('article')){
    nextArticle.setAttribute('title', 'nextElementSibling')
};

const lastArticle = parent.parentElement.lastElementChild;
const extraP = document.createElement('p');
extraP.innerText = 'Paragraf w ostatnim artykule';
lastArticle.insertBefore(extraP, lastArticle.querySelector('button'));

const firstArticle = parent.parentElement.firstElementChild;
const newArticle = document.createElement('article')
newArticle.classList.add('articles__item', 'article')
newArticle.innerHTML = `
    <h1 class="article__title">Nowy artykuł</h1>
    <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p>
    <button class="article__btn">Kupuję!</button>
`;

parent.parentElement.insertBefore(newArticle, firstArticle)



