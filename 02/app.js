console.log('DOM');

const links = document.querySelectorAll('a[data-url]');
let zmienna;

links.forEach((linkUrl) => {
    zmienna = linkUrl.dataset.url;
    linkUrl.setAttribute('href', zmienna);
});
