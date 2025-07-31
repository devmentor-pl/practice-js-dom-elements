console.log('DOM');
const linkList = document.querySelectorAll('[data-url]');
console.log(linkList);
linkList.forEach(function(item){
    console.log(item);
    const url = item.getAttribute('data-url')
    item.setAttribute('href', url);
    console.log(url)
})
