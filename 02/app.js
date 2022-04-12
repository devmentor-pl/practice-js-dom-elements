console.log('ZAD-2')

const links = document.querySelectorAll('ul > li > a')
console.log(links)

const arr = []
links.forEach(function(item) {
    let data = item.getAttribute('data-url')
    if(data) {
        arr.push(data)
        console.log(item)
        item.setAttribute('href', data)
    }
})
console.log(arr)















