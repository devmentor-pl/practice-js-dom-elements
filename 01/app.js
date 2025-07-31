console.log('DOM');

// const sectionElement = document.querySelector('.comments__item');
// const sectionElementTwo = document.querySelector('.comments__item--newest');

// if(sectionElement && sectionElementTwo){
//     const spanElement = sectionElementTwo.querySelectorAll('span');
//     const spanList = spanElement.length
//     console.log('Ilość elementów data-info to: ' + spanList)
    
// }


const element = document.querySelector('.comments__item.comments__item--newest');

if(element){
    const dataInfo = element.querySelectorAll('[data-info]');
    console.log('Ilość elementów to: ' + dataInfo.length)
}