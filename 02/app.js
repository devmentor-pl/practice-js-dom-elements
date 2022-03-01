console.log('DOM');

const aList = document.querySelectorAll(`a`);
console.log(aList);
if(aList) {
    for (i = 0; i < aList.length; i++) {
        urls = aList[i].getAttribute(`data-url`)
        if(urls) {
        console.log(urls);
        aList[i].setAttribute('href', urls);
        aList[i].removeAttribute('data-url');
        }
    }
}
    

