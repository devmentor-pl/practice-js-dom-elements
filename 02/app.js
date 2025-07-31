console.log('DOM');

const linksList = document.querySelectorAll('a')

if (linksList !== null) {
    const links = []
    for (let i = 0; i < linksList.length; i++) {
        if (linksList[i].hasAttributes('data-url')) {
            links[i] = linksList[i].getAttribute('data-url')
        }
    }
    for (let j = 0; j < linksList.length; j++) {
        if (linksList[j].hasAttributes('data-url')) {
            const modified = linksList[j].setAttribute('href', links[j])
        }
    }
}


// rozwiązanie optymalne
// const list = document.querySelectorAll('[data-url]')
// console.log(list)
// list.forEach(function(el) {
//     const attr = el.getAttribute('data-url')
//     el.setAttribute('href', attr)
// })