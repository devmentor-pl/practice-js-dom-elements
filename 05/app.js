(function () {
    console.log('DOM');

    const curr = document.querySelector('.js-curr')


    //dodanie buttona
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Usuń z koszyka"
    curr.parentElement.appendChild(deleteBtn)

    // dodanie klasy siblings
    let allChildrens = [...curr.parentElement.children]
    allChildrens.forEach(child => child.classList.add("sibling"))

    // dodanie title do kolejnego .article
    curr.parentElement.nextElementSibling.setAttribute("title", "nextElementSibling")

    // Dodanie paragrafu
    const newParagraph = document.createElement('p')
    newParagraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, asperiores.';

    const allArticles = [...curr.parentElement.parentElement.children]
    const lastArticle = allArticles[allArticles.length - 1];
    const lastArticleChildren = [...allArticles[allArticles.length - 1].children];
    const articleElementsNumber = lastArticleChildren.length
    lastArticle.insertBefore(newParagraph, lastArticleChildren[lastArticleChildren.length - 1])

    //dodanie kolejnego article
    const newArticle = curr.parentElement.cloneNode(true)
    newArticle.children[0].innerText = "New article"
    curr.parentElement.parentElement.appendChild(newArticle)
}
)()