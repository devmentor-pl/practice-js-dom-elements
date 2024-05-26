console.log('DOM');

const curr = document.querySelector('.js-curr');
const para = document.createElement('p')
const firstArticle = document.createElement('article')
firstArticle.closest('section')

console.log(firstArticle);

const btn = document.createElement('button')
curr.parentElement.append(btn)

const siblingOne = curr.previousElementSibling
const siblingTwo = siblingOne.previousElementSibling

const article = curr.parentElement.nextElementSibling



article.setAttribute('title', 'nextElementSibling')
const copyArticle = article.children
console.log(copyArticle);
// copyArticle.append

const paragraph = article.parentElement.lastElementChild.append(para)








btn.textContent = 'usun z koszyka'
btn.className = 'btn'
para.textContent = 'tu jest ten paragraf'


siblingOne.className = 'siblings'
siblingTwo.className = 'siblings'
