console.log('DOM');

const twoClassesEl = document.querySelector('.comments__item.comments__item--newest');

if(twoClassesEl !== null) {
    const atr = twoClassesEl.querySelectorAll('[data-info]');
    console.log(atr.length);
}






