console.log('DOM');

const elList = document.querySelectorAll('[data-url]')
console.log(elList) 


elList.forEach(function(el){
 const att = el.getAttribute('data-url')

 el.setAttribute('href', att)
})