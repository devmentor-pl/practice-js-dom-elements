console.log('DOM')

const curr = document.querySelector('.js-curr')

// 1

if (curr) {
	const newBtn = document.createElement('button')
	newBtn.textContent = `usuń z koszyka`
	curr.parentNode.insertBefore(newBtn, curr.nextSibling)
}

// 2

if (curr) {
	for (let i of curr.parentNode.children) {
		i.classList.add('siblings')
	}
}
// console.log(curr.parentNode.children)

// 3
if (curr) {
	curr.parentNode.nextElementSibling.setAttribute('title', 'nextElementSibling')
}

// 4
if (curr) {
	const newPara = document.createElement('p')
	newPara.textContent = 'New paragraph'
	const lastBtn = curr.parentNode.nextElementSibling.nextElementSibling.lastElementChild
	lastBtn.before(newPara)
}

// 5
if (curr) {
	const articleSectionCopy = curr.parentNode.nextElementSibling.cloneNode(true)
	curr.parentNode.insertAdjacentElement('beforebegin', articleSectionCopy)
}
