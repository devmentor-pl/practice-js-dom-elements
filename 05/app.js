console.log('DOM');

const curr = document.querySelector('.js-curr');
const deleteBtn = document.createElement('button');
curr.appendChild(deleteBtn)
deleteBtn.innerHTML = "usuń z koszyka"




const allArticles = document.querySelectorAll('.articles__item')
// console.log(allArticles)
const arrAllBtn = [...allArticles];
arrAllBtn.forEach(function (item) {
    item.classList.add('siblings');
    console.log(arrAllBtn)
})



const article = document.querySelector('.article')
const parent = article.parentElement;
console.log(parent)
parent.setAttribute('title', 'nextElementSibling')





const paragraph = document.createElement('p');
//  const lastArticle = document.querySelector('articles__item: last-child')


paragraph.classList.add('add-paragraph')
paragraph.textContent = 'new paragraph';
paragraph.insertBefore(paragraph, article);

/*czemu tu idzie mi na samą górę, ten paragraf, nie wiem jak to zrobić żeby był przed button w ost sekcji*/

console.log(paragraph)

const newArticle = article.cloneNode(true);
console.log(newArticle)

/*czemu mi nie duplikuje?*/