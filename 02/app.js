console.log('DOM');

const linksWithUrl = document.querySelectorAll('[data-url]');
console.log(linksWithUrl);


linksWithUrl.forEach((element) => {
    const elementUrl = element.getAttribute('data-url');
    element.setAttribute('href', elementUrl)
})