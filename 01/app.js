console.log('DOM');

const twoClasses = document.querySelector('.comments__item.comments__item--newest');

if (twoClasses) {
    // lepiej użyć '[data-info]'
    const spanList = twoClasses.querySelectorAll('span');

    let counter = 0;
    for (let i = 0; i < spanList.length; i++) {
        if (spanList[i].dataset.info) {
            counter++;
        }
    }
    console.log(counter);

}