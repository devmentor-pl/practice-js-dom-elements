console.log('DOM');

const dataUrlList = document.querySelectorAll('a[data-url]');

dataUrlList.forEach(function (item) {
    const linkAddress = item.getAttribute('data-url');
    item.setAttribute('href', linkAddress);
})
