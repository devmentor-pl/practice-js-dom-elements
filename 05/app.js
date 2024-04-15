console.log('DOM');

const curr = document.querySelector('.js-curr');
const currParent = curr.parentElement;
const currGrandParent = currParent.parentElement;

console.log(currParent)
console.log(currGrandParent)