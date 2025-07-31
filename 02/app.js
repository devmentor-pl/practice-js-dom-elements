console.log('DOM');
const aList = document.querySelectorAll('a');
if (aList) {
    const dataUrl = document.querySelectorAll('[data-url]');
    dataUrl.forEach(function (item) {
        const link = item.getAttribute('data-url');
        console.log(item)

        item.setAttribute('href', link)
    });


}


