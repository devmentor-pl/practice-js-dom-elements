console.log('DOM');

const links = document.querySelectorAll('a[data-url]')

for (let i = 0; i < links.length; i++) {
    const attributeValue = links[i].getAttribute("data-url")
    links[i].setAttribute("href", attributeValue)
}



// const links = document.querySelectorAll('a')

// if (links.length > 0) {
//     links.forEach(function (link) {
//         if (link.hasAttribute('data-url')) {
//             const attributeValue = link.getAttribute('data-url')
//             link.setAttribute("href", attributeValue)
//         }
//     })
// }