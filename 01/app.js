console.log('DOM')

const element = document.querySelector(".comments__item.comments__item--newest")
let searchElements
if (element) {
    searchElements = element.querySelectorAll("[data-info]")
}
console.log("Znaleziono " + searchElements.length + " elementy z atrybutem data-info")