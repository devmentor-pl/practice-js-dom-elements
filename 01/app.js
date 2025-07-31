console.log('DOM');


const hasTwoClasses = document.getElementsByClassName('comments__item comments__item--newest');


for(let i = 0; i < hasTwoClasses.length; i++) {
    const hasAtrDataInfo = hasTwoClasses[i].querySelectorAll('[data-info]');
    console.log(hasAtrDataInfo.length);
}