const linkList = document.querySelectorAll('[data-url]');

const arr = [...linkList]

arr.forEach(function(link){
    let urlValue = link.getAttribute('data-url')
    link.setAttribute('href', urlValue )
})



