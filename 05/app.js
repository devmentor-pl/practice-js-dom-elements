console.log('DOM')

const curr = document.querySelector('.js-curr')

// 1
const btn = document.createElement("button")
btn.textContent = "Usuń z koszyka"

curr.parentElement.appendChild(btn)

// 2
for (const tagEl of curr.parentElement.children) {
    if (tagEl !== curr) {
        tagEl.className = "siblings"
    }
}

// 3
const getNextParentSibling = curr.parentElement.nextElementSibling

getNextParentSibling.setAttribute("title", "nextElementSibling")

// 4
const getArticlesParent = curr.parentElement.parentElement
const getLastSectionChild = getArticlesParent.lastElementChild
const getLastSectionChildBtn = getLastSectionChild.lastElementChild

const para = document.createElement("p")
para.textContent = "Additional paragraph"

getLastSectionChild.insertBefore(para, getLastSectionChildBtn)

// 5
const firstSectionChild = getArticlesParent.firstElementChild

const cln = curr.parentElement.nextElementSibling.cloneNode(true)
cln.firstElementChild.textContent = "Cloned article structure"
getArticlesParent.insertBefore(cln, firstSectionChild)
