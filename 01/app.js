console.log('DOM');

const itemEls = document.querySelectorAll('.comments__item.comments__item--newest');

let count = 0;
itemEls.forEach(el => {
   const newEls = el.querySelectorAll('[data-info]')
   count += newEls.length
   console.log(`Znalezono: ${count} elementy z atrybutem [data-info]`);
})





