console.log('DOM');
const dataUrlList = document.querySelectorAll('[data-url]');
console.log(dataUrlList);

dataUrlList.forEach(function(link){
    link.setAttribute('href',dataUrlList);
}


)
console.log(link.getAttribute)

