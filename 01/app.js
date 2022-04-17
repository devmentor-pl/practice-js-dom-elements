console.log('ZAD-1')


console.log('---- 1 dataset for finding data-info ----')
const comments = document.querySelector('.comments__item.comments__item--newest')

const children = comments.querySelectorAll('span')
let dataElement = 0
for(let i=0; i<children.length; i++) {
    let child = children[i]
    if(child.dataset.info) {
        dataElement++
    }
}
console.log('Found data-info elements: ' + dataElement)


console.log('---- 2 getAttribute for finding data-info ----')
const comments2 = document.querySelector('.comments__item.comments__item--newest')
const span2 = comments2.querySelectorAll('span')

let dataElement2 = 0
span2.forEach(function(item) {
    let elem = item.getAttribute('data-info')
    if(elem) {
        dataElement2++
    }
})
console.log('Found data-info elements: ' + dataElement2)













