console.log('DOM');

const links=document.querySelectorAll('a');
let linksDataURL;

links.forEach(function(element){

   linksDataURL=element.getAttribute('data-url');

   if(element.hasAttribute('data-url')){
      element.setAttribute('href', linksDataURL);
      console.log(element.getAttribute('href'));  
   }

})