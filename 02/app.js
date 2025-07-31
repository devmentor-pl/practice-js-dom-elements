const linkList = document.querySelectorAll('[data-url]');
const attributeList = [];
const a = [...document.querySelectorAll('a')];

linkList.forEach(function(item) {
    attributeList.push(item.getAttribute('data-url'))
})

a.forEach(function(item, i){
    
    if(attributeList[i] === undefined) {
        item.setAttribute('href', '#');
    }
    else {
        item.setAttribute('href', attributeList[i]);
    }
})
