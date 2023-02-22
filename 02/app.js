console.log('DOM');

const linkList = document.querySelectorAll('[data-url]');

const attributeValue = linkList.forEach(el => {
    const dataUrl = el.getAttribute('data-url');
    if(!el.hasAttribute('href')) {
        el.setAttribute('href', dataUrl);
    }
});
