console.log('DOM');
const findElement = document.querySelector('.comments__item.comments__item--newest')
if (findElement && findElement.hasChildNodes()) {
    const dataInfo = findElement.querySelectorAll('[data-info]')
    console.log(dataInfo.length)
}