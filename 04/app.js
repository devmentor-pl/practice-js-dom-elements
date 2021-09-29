console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
console.log(nav);
const newUl = document.createElement('ul');

nav.appendChild(newUl);


for (let i=0; i<3; i++) {

    const newLi = document.createElement('li');
    newUl.appendChild(newLi);

    const newA = document.createElement('a');
    newLi.appendChild(newA);

    console.log(newA);

    newA.innerText = menuItems[i].text;
    newA.setAttribute('href',menuItems[i].url);
}

console.log(menuItems[0].text);


//poniżej tylko serio nieudanych prób :). Któraś była blisko z wykorzystaniemm forEach?
//jaki jest inny sposób na to zadanie?



// let aElements = document.querySelectorAll('a');

// for (i = 0; i < aElements.length; i++) {
    
//         aElements[i].setAttribute('href', menuItems.forEach(function(el) {
//             return el.text;
//         }));
//   }


// aElements.forEach(function(el) {
//     console.log(el);
// })

// console.log(aElements);

// menuItems.forEach(function(el) {
//     console.log(el.text);
// });

// console.log(menuItems);


