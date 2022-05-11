console.log('DOM');

const curr = document.querySelector('.js-curr');

// 1 task 

const btn = document.createElement('button');
btn.textContent = 'usuń z koszyka';

curr.parentElement.appendChild(btn);

// 2 task

const siblingList = [];
for (let i = 0; i < siblingList.length; i++) {
    if (siblingList[i] !== curr) {
        siblingList.classList.add('siblings');
    }
}

//3 task

const nextArticle = curr.parentElement.nextElementSibling;
nextArticle.setAttribute('title', 'nextElementSibling');

//4 task

const lastArticle = nextArticle.parentNode.lastElementChild;
const newParagraph = document.createElement('p');
lastArticle.insertBefore(newParagraph, lastArticle.lastElementChild);

//5 task

const newArticle = lastArticle.cloneNode(true);
nextArticle.parentNode.insertBefore(newArticle, nextArticle);
