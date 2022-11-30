const linkList = document.querySelectorAll('[data-url]');
const attributeList = [];
const a = [...document.querySelectorAll('a')];
let count = 0;

linkList.forEach(function(item) {
    attributeList.push(item.getAttribute('data-url'))
})

a.forEach(function(item){
    
    if(attributeList[count] === undefined) {
        item.setAttribute('href', '#');
    }
    else {
        item.setAttribute('href', attributeList[count]);
    }
    count++;
})

// for(let i = 0; i < attributeList.length; i++) {
//     a[i].setAttribute('href', attributeList[i])
// }