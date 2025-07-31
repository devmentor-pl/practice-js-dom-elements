console.log('DOM');

const arrOfLinks = document.querySelectorAll('a[data-url]')
console.log(arrOfLinks.length)
if(arrOfLinks && arrOfLinks.length !== 0) {
  arrOfLinks.forEach(item => {
    item.setAttribute('href', `${item.getAttribute('data-url')}`);
    item.setAttribute('target', '_blank')
  })
}
