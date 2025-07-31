console.log('DOM');
const element=document.querySelectorAll('[data-url]')

element.forEach(function(e){
    const link=e.getAttribute('data-url')
    e.setAttribute('href',link)
})

