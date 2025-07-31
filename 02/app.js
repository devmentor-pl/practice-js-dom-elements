console.log('DOM');
const allLinks = document.querySelectorAll("[data-url]")
console.log(allLinks)
allLinks.forEach(link => {
    const value = link.dataset.url
    link.setAttribute('href', value)
})