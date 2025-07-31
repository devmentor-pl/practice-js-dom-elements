console.log('DOM');

const linkList = document.querySelectorAll('a')
console.log(linkList)

linkList.forEach(function(element){
    if(element.hasAttribute('data-url')){
        const attributeValue = element.getAttribute('data-url')
          
        element.setAttribute('href', attributeValue)
   
    }
   
})