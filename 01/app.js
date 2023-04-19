console.log('DOM');

const elementWithClass = document.querySelector('.comments__item.comments__item--newest')
console.log(elementWithClass)

if(elementWithClass) {
    const elementWithAttr = elementWithClass.querySelectorAll('[data-info]')
    console.log(elementWithAttr)
    console.log(elementWithAttr.length)
}
