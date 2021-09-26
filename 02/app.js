const elements = document.querySelectorAll('[data-url]');

Object.values(elements).map((el, idx) => {
    const attrValue = el.getAttribute('data-url');
    elements[idx].href = attrValue;

});