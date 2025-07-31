console.log('DOM');

const elementsList = document.querySelectorAll(`a[data-url]`);
console.log(elementsList)

elementsList.forEach(function (element){
    if (element.hasAttribute('data-url')) {
        const value = element.getAttribute('data-url')
        element.setAttribute('href', value)
    }
})