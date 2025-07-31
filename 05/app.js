console.log('ZAD 5');

// curr
// =====================
const curr = document.querySelector('.js-curr');


// additionally done - add color for added elements
// =====================


// 1 add button
// =====================
const btnRemove = document.createElement('button')
btnRemove.innerText = 'usuń z koszyka'
btnRemove.style.color = 'red'

const parentCurr = curr.parentElement
parentCurr.appendChild(btnRemove)


// 2 add class siblings
// =====================
const currElements = parentCurr.children
console.log(currElements)
for(let i=0; i<currElements.length; i++) {
    const item = currElements[i]
    if(curr !== item) {
        console.log(item)
        item.classList.add('siblings')
    }
}


// 3 add attribute title = nextElementSibling
// ======================
const article = parentCurr.nextElementSibling

// article.title = 'nextElementSibling'
// or
article.setAttribute('title', 'nextElementSibling')


// 4 last article - add paragraph before button
// =======================
// const section = parentCurr.parentElement
// const lastArticle = section.lastElementChild
// or
const lastArticle = parentCurr.nextElementSibling.nextElementSibling
console.log(lastArticle)

// const lastArticleButton = lastArticle.lastElementChild
// or
const lastArticleButton = lastArticle.children[lastArticle.children.length - 1]
console.log(lastArticleButton)

const paragraph = document.createElement('p')
paragraph.innerText = 'added paragraph'
paragraph.style.color = 'red'
lastArticle.insertBefore(paragraph, lastArticleButton)


// 5 add article with the same structure - użyto cloneNode 
// lepszy i krótszy sposób
// =======================
const articleFirst = curr.parentElement.cloneNode(true)
curr.parentElement.parentElement.insertBefore(articleFirst, curr.parentElement)

// added additionally for color & real subject :)
curr.parentElement.previousElementSibling.style.color = 'red'
curr.parentElement.parentElement.firstElementChild.firstElementChild.innerText = 'Podstawy JS'


// old
// ---------------------
// const articleFirst = document.createElement('article')
// articleFirst.style.color = 'red'

// const h1 = document.createElement('h1')
// const p = document.createElement('p')
// const button = document.createElement('button')

// h1.className = 'article__title'
// h1.innerText = 'JS - Podstawy'

// p.className = 'article__description'
// p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.'

// button.className = 'article__btn'
// button.textContent = 'Kupuję!'

// articleFirst.appendChild(h1)
// articleFirst.appendChild(p)
// articleFirst.appendChild(button)

// section.insertBefore(articleFirst, parentCurr)








