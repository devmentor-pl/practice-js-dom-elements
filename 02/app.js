console.log('DOM');

const aList = document.querySelectorAll('a[data-url]');

aList.forEach(function(el) {
    for(let i=0; i < aList.length; i++) {
        let urlEl = aList[i].dataset.url
        aList[i].href = urlEl 
    }
})