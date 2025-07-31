// console.log('DOM');


// const navElement = document.querySelector('nav');
// if (navElement) {
//     const ulElement = document.createElement('ul');
//     navElement.appendChild(ulElement);
//     if (ulElement) {
//         for (i = 1; i < 4; i++) {
//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             if (liElement) {
//                 const aElement = document.createElement('a');
//                 liElement.appendChild(aElement);
//                 const aList = document.querySelectorAll('a');
//                 const text = ['Start', 'Galeria', 'Kontakt'];
//                 const url = ['/','/gallery','/contact'];
//                 for(let j=0; j < aList.length; j++) {
//                     aList[j].textContent = text[j];
//                     aList[j].setAttribute('href', url[j]);
//                 }
//             }
//         }
//     }
// }













//struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
    
  ];
 
  const navEl = document.querySelector('nav');
 
  const newUlEl = document.createElement('ul');
  navEl.appendChild(newUlEl);
  menuItems.forEach(function(item) {
     const newLiEl = document.createElement('li');
     newUlEl.appendChild(newLiEl);
 
     const newLinkEl = document.createElement('a');
     newLinkEl.innerText = item.text;
     newLinkEl.setAttribute('href', item.url);
     newLiEl.appendChild(newLinkEl);
  });
 
