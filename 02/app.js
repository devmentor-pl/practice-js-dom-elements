console.log('DOM');

const arrOfLinks = document.querySelectorAll('a[data-url]')
console.log(arrOfLinks.length)
if(arrOfLinks && arrOfLinks.length !== 0) {
  let x = arrOfLinks[0].getAttribute('data-url'); 
  let y = arrOfLinks[1].getAttribute('data-url'); 
  let z = arrOfLinks[2].getAttribute('data-url');
  arrOfLinks[0].setAttribute('href', `${x}`)
  arrOfLinks[1].setAttribute('href', `${y}`)
  arrOfLinks[2].setAttribute('href', `${z}`)
  arrOfLinks.forEach(item => item.setAttribute('target', '_blank'))
}
