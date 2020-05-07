console.log('DOM');

const curr = document.querySelector('.js-curr');
const art = document.querySelector('.articles__item');
const newButon = document.createElement('button');
newButon.innerText = 'usuń z koszyka';
art.appendChild(newButon);

//console.log(art)
const arr = Array.from(art.children);
//console.log(arr)

arr.forEach(function(el)
{
    //console.log(el)
    el.classList.add('siblings');
})

const middleArt = art.nextElementSibling;
//console.log(middleArt)
middleArt.setAttribute('title', 'nextElementSibling');

const lastArt = middleArt.nextElementSibling;
const lastArtButton = lastArt.querySelector('button');
console.log(lastArtButton);
const newPar = document.createElement('p');
newPar.innerText = 'nowy paragraf!!!';
lastArtButton.before(newPar);

const newArt = document.createElement('article');
const section= document.querySelector('section');
section.insertBefore(newArt, art);

const newHeader= document.createElement('h1');
newHeader.classList.add('new__title');
newHeader.innerText = 'Randomowe elementy';
newArt.appendChild(newHeader);

const paragraph = document.createElement('p');
paragraph.classList.add('new__paragaraph');
paragraph.innerText = 'jakiś nowy paragraf';
newArt.appendChild(paragraph);

const topButton = document.createElement('button');
topButton.classList.add('topButton');
topButton.innerText = 'kupuję';
newArt.appendChild(topButton);


