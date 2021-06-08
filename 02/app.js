console.log('DOM');

const anchorList = document.querySelectorAll('a[data-url]');
const anchorArr = Array.from(anchorList);
const attributeArr = [];

anchorArr.forEach(function(el) {
    const dataAttr = el.getAttribute('data-url');
    attributeArr.push(dataAttr);
});

for(let i = 0; i <= anchorArr.length; i++) {
    anchorArr[i].setAttribute('href', attributeArr[i]);
}