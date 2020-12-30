console.log('DOM');
const aElements = [...document.getElementsByTagName('a')];

aElements.forEach(function(item){
    if(item.getAttribute('data-url')){
        let webAddress = item.getAttribute('data-url');
        item.setAttribute('href', webAddress);
    };
});