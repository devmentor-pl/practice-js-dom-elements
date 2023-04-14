console.log('DOM');

// 1
const curr = document.querySelector('.js-curr');
const firstArticle = curr.parentElement;
const deleteButton = document.createElement('button');
deleteButton.textContent = "usuń z koszyka";
firstArticle.appendChild(deleteButton);

// 2
if(firstArticle.hasChildNodes()) {
    const articleChildren = [...firstArticle.children];
    articleChildren.forEach(function(child) {
        if(!child.classList.contains('js-curr')) {
            child.classList.add('siblings');
        }
    })
}

// 3
const secondArticle = firstArticle.nextElementSibling;
secondArticle.setAttribute('title', 'nextElementSibling');

// 4
const thirdArticle = secondArticle.nextElementSibling;
const paragraph = document.createElement('p');
thirdArticle.insertBefore(paragraph, thirdArticle.lastElementChild);

// 5
const articlesSection = firstArticle.parentElement;
const newArticle = document.createElement('article');
const newHeader = document.createElement('h1');
const newParagraph = document.createElement('p');
const newBtn = document.createElement('button');
for(const element of [newHeader, newParagraph, newBtn]) {
    newArticle.appendChild(element);
}
articlesSection.insertBefore(newArticle, articlesSection.firstElementChild);


