console.log('DOM');

const searchResult = document.querySelector('.comments__item.comments__item--newest')
console.log(searchResult)

if(searchResult){
    const elementData = searchResult.querySelectorAll('[data-info]')
    console.log(elementData.length)
}
