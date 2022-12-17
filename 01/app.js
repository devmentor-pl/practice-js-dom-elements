console.log('DOM');

const boxList = document.querySelector('.comments__item.comments__item--newest');

if(boxList){
    const boxListElement = boxList.querySelectorAll('[data-info]')
    console.log(boxListElement)
    console.log(boxListElement.length)
}


