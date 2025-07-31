console.log('DOM');


const dataUrlLinks = document.querySelectorAll('[data-url]')
const dataUrlLinksArr = Array.from(dataUrlLinks)

console.log("Node lista:", dataUrlLinks);
console.log("Tablica:", dataUrlLinksArr );


dataUrlLinksArr.forEach(function(item){
    const sth = item.getAttribute('data-url')
    console.log(sth);

    item.setAttribute('href', sth)
})

console.log("Po dodaniu atrybutu href:", dataUrlLinksArr);
