console.log('DOM');

const curr = document.querySelector('.js-curr');

const button2 = document.createElement('button')
button2.innerText = 'usuń z koszyka'
curr.parentElement.appendChild(button2)


const children = Array.from(curr.parentElement.children)
children.forEach(function (item) {
    if (item !== curr) {
        item.classList.add('siblings')
    }

})

const siblingElement = curr.parentElement.nextElementSibling
siblingElement.title = 'nextElementSibling'

const lastArticle = curr.parentElement.nextElementSibling.nextElementSibling

const button = lastArticle.children[lastArticle.children.length - 1]


const p = document.createElement('p')
p.innerText = 'LOREM IPSUM'

lastArticle.insertBefore(p, button)

const cloneArticle = curr.parentElement.cloneNode(true)

curr.parentElement.parentElement.insertBefore(cloneArticle, curr.parentElement)