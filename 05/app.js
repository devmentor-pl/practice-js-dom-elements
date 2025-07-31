console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;
const currSiblings = currParent.children;
const nextSiblingOfParent = currParent.nextElementSibling;
const section = currParent.parentElement;
const lastArticle = section.lastElementChild;

//1. create removeBtn 
const removeBtn = document.createElement('button');
removeBtn.textContent = 'usuń z koszyka';
curr.after(removeBtn);


//2. add className .siblings
for (let i=0; i<currSiblings.length; i++) {
    if (!currSiblings[i].classList.contains('js-curr')) {
        currSiblings[i].classList.add('siblings')
    } 
}

//3. nextElementSibling of parent with className '.article'
while (nextSiblingOfParent) {
    if(nextSiblingOfParent.classList.contains('article')) {
        nextSiblingOfParent.setAttribute('title', 'nextElementSibling');
        break;
    }
    nextSiblingOfParent = nextSiblingOfParent.nextElementSibling;
}

//4. add paragraph to the last article
const p = document.createElement('p');
lastArticle.lastElementChild.before(p);

//5. add newArticle
const newArticle = currParent.cloneNode(true)
section.prepend(newArticle)

