console.log('DOM');

const curr = document.querySelector('.js-curr');

// zad.1
const article = curr.parentElement;
if(curr) {
    if(article) {
        const newBtn = document.createElement('button');
        newBtn.innerText = 'usuń z koszyka';
        article.appendChild(newBtn);
    }
}

// zad.2
const children = article.children;
const childrenArr = [...children];
childrenArr.filter(el => el !== curr).forEach(el => el.classList.add('siblings'));

// zad.3
const nextArticle = article.nextElementSibling;
if(!nextArticle.hasAttribute('title')) {
    nextArticle.setAttribute('title', 'nextElementSibling');
}

// zad.4
const lastArticle = nextArticle.nextElementSibling;

const btn = lastArticle.lastElementChild;
const newP = document.createElement('p');
newP.style.paddingBlock = '5px';
newP.innerText = 'nowy paragraf';

lastArticle.insertBefore(newP, btn);

// zad.5
const section = article.parentElement;
const title = nextArticle.firstElementChild;
const p = title.nextElementSibling;
const newArticle = document.createElement('article');

if(section && title && p && btn) {
    section.insertBefore(newArticle, article);
    const cloneaTitleEl = title.cloneNode(true);
    cloneaTitleEl.innerText = 'Nowy Artykul';
    const clonePEl = p.cloneNode(true);
    const cloneBtnEl = btn.cloneNode(true);
    newArticle.appendChild(cloneaTitleEl);
    newArticle.appendChild(clonePEl);
    newArticle.appendChild(cloneBtnEl);
}
