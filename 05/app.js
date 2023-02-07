console.log('DOM')

const curr = document.querySelector('.js-curr')

if (curr) {
	const cloneBtn = curr.cloneNode(false)
	cloneBtn.textContent = 'Usuń z koszyka'
	curr.parentElement.appendChild(cloneBtn)
}

const currSiblings = curr.parentElement.children
for (let i = 0; i < currSiblings.length; i++) {
	const el = currSiblings[i]
	el.classList.add('siblings')
}

const nextArticle = curr.parentElement.nextElementSibling
nextArticle.setAttribute('title', 'nextElementSibling')

const sectionArticles = curr.closest('.articles')
const lastArticle = sectionArticles.lastElementChild
const p = document.createElement('p')
p.innerText = 'Paragraph before btn'
const lastArticleBtn = lastArticle.lastElementChild

lastArticle.insertBefore(p, lastArticleBtn)

const newArticle = document.createElement('article')
newArticle.classList.add('articles__item', 'article')
newArticle.innerHTML = `       
    <h1 class="article__title">JS - Article add with JS</h1>
    <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p>
    <button class="article__btn">Kupuję!</button>
`

const firstArticle = sectionArticles.firstElementChild
sectionArticles.insertBefore(newArticle, firstArticle)
