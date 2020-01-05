const createNewArticle = (title, content) => {

    const newArticle = document.createElement('article')
    newArticle.classList = 'articles__item article'

    const newArticleH1 = document.createElement('h1')
    newArticleH1.className = 'article__title'
    newArticleH1.textContent = title

    const newArticleP = document.createElement('p')
    newArticleP.className = 'article__description'
    newArticleP.textContent = content

    const newArticleButton = document.createElement('button')
    newArticleButton.className = 'article__btn'
    newArticleButton.textContent = 'Kupuję!'

    newArticle.appendChild(newArticleH1)
    newArticle.appendChild(newArticleP)
    newArticle.appendChild(newArticleButton)
    return newArticle
}

const createNewParagraph = (content) => {
    const paragraph = document.createElement('p')
    paragraph.textContent = content
    return paragraph
}

const createNewButton = content => {
    const button = document.createElement('button')
    button.textContent = content
    return button
}

const curr = document.querySelector('.js-curr');

const removeButton = createNewButton('usuń z koszyka')
curr.parentNode.appendChild(removeButton)

const currentArticle = curr.parentNode
const children = [...currentArticle.children]
    .filter(child => child !== curr)
    .map(child => child.classList.add('siblings'))

currentArticle.nextElementSibling.title = 'nextElementSibling'
const section = currentArticle.parentNode
const articlesLength = section.children.length
const lastArticle = section.children[articlesLength - 1]

const paragraph = createNewParagraph('example')
const lastElementInArticle = lastArticle.children[lastArticle.children.length - 1]
lastArticle.insertBefore(paragraph, lastElementInArticle)

const newArticle = createNewArticle('TITLE', 'DESCRIPTION')
lastArticle.parentNode.insertBefore(newArticle, lastArticle.parentNode.firstChild)