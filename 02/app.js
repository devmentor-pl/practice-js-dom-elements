console.log('DOM');

const aList = document.querySelectorAll('a');
if (aList) {
    for (let i = 0; i < aList.length; i++) {
    if (aList[i].hasAttribute('data-url')) {
            aList[i].setAttribute('href', aList[i].getAttribute('data-url'));
        }
    }
}
