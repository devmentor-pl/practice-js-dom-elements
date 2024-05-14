console.log('DOM');

const curr = document.querySelector('.js-curr');
const btn = document.createElement('button');

// dodanie przycisku
btn.textContent = 'Usuń z koszyka';
curr.after(btn);

const parent = curr.parentElement.children;
// dodanie klasy rodzeństwu
for(let i =0; i < parent.length; i++){
    // console.log(curr.parentElement.children[i]);
    if(!parent[i].classList.contains('js-curr')){
    curr.parentElement.children[i].classList.add('siblings');
    };
}
// dodanie atrybutu
curr.parentElement.nextElementSibling.setAttribute('title', 'nextElementSibling');

// dodanie paragrafu
const paragraph = document.createElement('p');
paragraph.textContent = 'Dodatkowy paragraf';
curr.parentElement.nextElementSibling.nextElementSibling.children[1].after(paragraph);

// dodanie kolejnego artykułu do listy jako pierwszy

const firstArticle = document.createElement('article');
// firstArticle.classList.add('articles__item article');
firstArticle.className = 'articles__item article';
firstArticle.innerHTML = `<h1 class="article__title">Pierwszy artykuł</h1 class="article__btn">
            <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p class="article__btn">
            <button class="article__btn">Kupuję!</button>`;

curr.parentElement.before(firstArticle); 