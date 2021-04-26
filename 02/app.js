console.log('DOM');

const dataUrl = document.querySelectorAll("[data-url");

dataUrl.forEach(function(item) {

    const link = item.getAttribute("data-url")
    console.log(link);

    item.setAttribute("href", link);
    console.log(item);

})