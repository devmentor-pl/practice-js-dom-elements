console.log('DOM');
const linkElements=document.querySelectorAll('a[data-url')
// console.log(linkElements);
linkElements.forEach(function(item){
   const setLink= item.getAttribute('data-url')
   item.setAttribute('href',setLink)
//    console.log(setLink);
})
