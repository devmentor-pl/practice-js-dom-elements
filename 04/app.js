console.log('DOM');

// struktura do wykorzystania w pętli/forEach()
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

//  WARIANT 1
// const navElement = document.querySelector('nav');
// console.log(navElement);

// if(navElement) {
//     const ulElement = document.createElement('ul');
//     const numbersOfLinks = 3;
//     for(i=0; i<numbersOfLinks; i ++) {
//         const liElement = document.createElement('li');
//         const link = document.createElement('a');
        
//         switch(i) {
//             case 0: 
//             link.innerText = 'start';
//             link.setAttribute('href', '/');
//             break;
//             case 1: 
//             link.innerText = 'galeria';
//             link.setAttribute('href', '/gallery');
//             break;
//             case 2: 
//             link.innerText = 'kontakt';
//             link.setAttribute('href', '/contact');
//             break;
//         }
//         ulElement.appendChild(liElement);
//         liElement.appendChild(link);
//     }
//     navElement.appendChild(ulElement);  
// }


// WARIANT 2 z forEach()

const navElement = document.querySelector('nav');
console.log(navElement);

if(navElement) {
    const ulElement = document.createElement('ul');
    
    menuItems.forEach(function(el) {
        const liElement = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = el.text;
        link.setAttribute('href', el.url);
        liElement.appendChild(link);
        ulElement.appendChild(liElement);
        console.log(el.url);
    })
    navElement.appendChild(ulElement);  
};







