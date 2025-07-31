console.log('DOM');

const dataUrl = document.querySelector('[data-url]');
const linkFromHtml = dataUrl.dataset.url;
const hrefTag = dataUrl.setAttribute("href", linkFromHtml);


let dataUrlArray = document.querySelectorAll('[data-url]');

console.log(dataUrlArray)
console.log(dataUrlArray[0].dataset.url)

dataUrlArray.forEach(element=> {
    const url = element.dataset.url;
    element.setAttribute('href', url)
});

console.log(dataUrlArray)