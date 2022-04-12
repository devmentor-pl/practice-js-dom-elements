console.log('ZAD-1')


console.log('---- 1 dataset for finding data-info ----')
const comments = document.querySelector('.comments__item.comments__item--newest')
// console.log(comments)

const children = comments.querySelectorAll('span')
// console.log(children)
let dataElement = 0
for(let i=0; i<children.length; i++) {
    let child = children[i]
    // console.log(child)
    if(child.dataset.info) {
        // console.log(child.dataset.info)
        dataElement++
    }
}
console.log('Found data-info elements: ' + dataElement)


console.log('---- 2 getAttribute for finding data-info ----')
const comments2 = document.querySelector('.comments__item.comments__item--newest')
// console.log(comments2)
const span2 = comments2.querySelectorAll('span')
// console.log(span2)
let dataElement2 = 0
span2.forEach(function(item) {
    // console.log(item)
    let elem = item.getAttribute('data-info')
    if(elem) {
        // console.log(elem)
        dataElement2++
    }
})
console.log('Found data-info elements: ' + dataElement2)













