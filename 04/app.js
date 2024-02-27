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


// WARIANT 2 z forEach() // dodają się wszystkie 3 linki <a> do kazdego <li>

const navElement = document.querySelector('nav');
console.log(navElement);

if(navElement) {
    const ulElement = document.createElement('ul');
    
    menuItems.forEach(function(el) {
        const liElement = document.createElement('li');

        for(i=0; i<menuItems.length; i ++) {
            const link = document.createElement('a');
            switch(i) {
                case 0: 
                link.innerText = 'start';
                link.setAttribute('href', '/');
                liElement.appendChild(link);
                break;
                case 1: 
                link.innerText = 'galeria';
                link.setAttribute('href', '/gallery');
                liElement.appendChild(link);
                break;
                case 2: 
                link.innerText = 'kontakt';
                link.setAttribute('href', '/contact');
                liElement.appendChild(link);
                break;
            }
        }
        ulElement.appendChild(liElement);
    })
    navElement.appendChild(ulElement);  
};







