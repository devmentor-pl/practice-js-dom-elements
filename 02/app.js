console.log('DOM');

const linkList = [...document.querySelectorAll('[data-url]')];

if (linkList) {

    linkList.forEach(function (item) {
        const itemAttr = item.getAttribute('data-url');
        item.setAttribute('href', itemAttr);
    })
};