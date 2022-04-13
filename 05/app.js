console.log('ZAD 5');

// curr
// ---------------------
const curr = document.querySelector('.js-curr');


// additionally done - add color to added elements
//----------------------


// add button
// ---------------------
const btnRemove = document.createElement('button')
btnRemove.innerText = 'usuń z koszyka'
btnRemove.style.color = 'red'

const parentCurr = curr.parentElement
console.log(parentCurr)
parentCurr.appendChild(btnRemove)


// add class siblings
// ---------------------
const currElements = parentCurr.querySelectorAll('.js-curr')
console.log(currElements)
currElements.forEach(item => {
    console.log(item)
    const sibling = curr.nextElementSibling
    sibling.className = 'siblings'
    console.log(sibling)
})


// add attribute title = nextElementSibling
// ----------------------
const article = parentCurr.nextElementSibling

// article.title = 'nextElementSibling'
// or
article.setAttribute('title', 'nextElementSibling')


// last article - add paragraph before button
// -----------------------
const section = parentCurr.parentElement
console.log(section)
const lastArticle = section.lastElementChild
console.log(lastArticle)

const lastArticleButton = lastArticle.querySelector('.article__btn')
console.log(lastArticleButton)
const paragraph = document.createElement('p')
paragraph.innerText = 'added paragraph'
paragraph.style.color = 'red'
lastArticle.insertBefore(paragraph, lastArticleButton)


// add article with the same structure
// -----------------------
const articleFirst = document.createElement('article')
articleFirst.style.color = 'red'

const h1 = document.createElement('h1')
const p = document.createElement('p')
const button = document.createElement('button')

h1.className = 'article__title'
h1.innerText = 'JS - Podstawy'

p.className = 'article__description'
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.'

button.className = 'article__btn'
button.textContent = 'Kupuję!'

articleFirst.appendChild(h1)
articleFirst.appendChild(p)
articleFirst.appendChild(button)

section.insertBefore(articleFirst, parentCurr)








