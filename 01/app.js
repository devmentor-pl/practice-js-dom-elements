console.log('DOM');

const parentElement = document.querySelector(".comments__item.comments__item--newest")

const childElements = parentElement.querySelectorAll('[data-info]')
const amount = childElements.length

childElements.forEach(function(child) {
    console.log(child)
})

console.log('Ilość elementów posiadających atrybut data-info :' + amount)