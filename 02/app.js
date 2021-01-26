console.log('DOM');



const dataUrlList = document.querySelectorAll('[data-url]');


if(dataUrlList) {
    dataUrlList.forEach(function (item) {
    const href = item.getAttribute('data-url');
    item.setAttribute('href', href);
});
}