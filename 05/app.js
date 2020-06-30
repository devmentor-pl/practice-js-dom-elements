console.log('DOM');

const curr = document.querySelector('.js-curr');
const articleMain = document.querySelector('.articles__item');
const deleteBtn = document.createElement('button');
articleMain.appendChild(deleteBtn)
deleteBtn.innerHTML = "usuń z koszyka"




const allArticles = document.querySelectorAll('.articles__item')
// console.log(allArticles)
const arrAllBtn = [...allArticles];
arrAllBtn.forEach(function (item) {
    item.classList.add('siblings');
    console.log(arrAllBtn)
})





const article = document.querySelector('.article')
const parent = articleMain.parentElement;
console.log(parent)
parent.setAttribute('title', 'nextElementSibling')





const beforeLastArticle = articleMain.nextElementSibling;
const lastArticle = beforeLastArticle.nextElementSibling;
let lastBtn = lastArticle.querySelector('button');

const paragraph = document.createElement('p');


paragraph.classList.add('add-paragraph')
paragraph.textContent = 'new paragraph';
lastBtn = lastArticle.insertBefore(paragraph, lastBtn);





// console.log(paragraph)

const newArticle = articleMain.cloneNode(true);
articleMain.appendChild(newArticle);
console.log(newArticle)