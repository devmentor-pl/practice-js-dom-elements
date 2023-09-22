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
	if (curr !== el) {
		el.classList.add('siblings')
	}
}

const nextArticle = curr.parentElement.nextElementSibling
nextArticle.setAttribute('title', 'nextElementSibling')

const sectionArticles = curr.closest('.articles')
const lastArticle = sectionArticles.lastElementChild
const p = document.createElement('p')
p.innerText = 'Paragraph before btn'
const lastArticleBtn = lastArticle.lastElementChild

lastArticle.insertBefore(p, lastArticleBtn)

const newArticle = lastArticle.cloneNode(true)
const newArticleTitle = newArticle.firstElementChild
newArticleTitle.innerText = 'Article add with JS'

const firstArticle = sectionArticles.firstElementChild
sectionArticles.insertBefore(newArticle, firstArticle)
