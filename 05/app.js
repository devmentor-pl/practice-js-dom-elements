console.log('DOM');

const curr = document.querySelector('.js-curr');
const parent = curr.parentElement
const newBtn = document.createElement('button')
newBtn.innerText = "Usuń z koszyka"
parent.appendChild(newBtn)

const children = Array.from(parent.children)

const sliblings = children.filter(child => child !== curr)

console.log(sliblings)
console.log(sliblings)
for(let i = 0; i < sliblings.length; i++){
    sliblings[i].classList.toggle('sliblings')
}

parent.nextElementSibling.setAttribute('title','nextElementSlibling')

const lastArticle = parent.parentElement.lastElementChild
const pElement = document.createElement('p')
pElement.innerText = 'new paragraph'
const articlebutton = lastArticle.querySelector('button')
lastArticle.insertBefore(pElement,articlebutton)

const newArticle = document.createElement('article')
newArticle.classList.add('articles__item', 'article')
newArticle.innerHTML = 
    `<h1 class="article__title">JS - Elementy DOM2</h1>
    <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p>
    <button class="article__btn js-curr">Kupuję!</button>`

parent.parentElement.insertBefore(newArticle,parent)