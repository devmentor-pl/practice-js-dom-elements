console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navEl = document.querySelector('nav');
const ulEl = document.createElement('ul');

if(navEl) {
    navEl.appendChild(ulEl);

    for(let i = 0; i < menuItems.length; i++) {
        let liEl = document.createElement('li');
        let aEl = document.createElement('a');

        ulEl.appendChild(liEl);
        liEl.appendChild(aEl);
    }
}

const aElItems = ulEl.querySelectorAll('a');

aElItems.forEach(function(element, index) {
    element.setAttribute('href', menuItems[index]['url']);
    element.textContent = menuItems[index]['text'];
})

// const navEL = document.querySelector('nav');

// if(navEL) {

//     const ulEL = document.createElement('ul')

//     if(ulEL) {

//         const liEl1 = document.createElement('li');
//         const liEl2 = document.createElement('li');
//         const liEl3 = document.createElement('li');

//         liEl1.setAttribute('href' , '/');
//         liEl2.setAttribute('href' , '/gallery');
//         liEl3.setAttribute('href' , '/contact');

//         liEl1.textContent = 'start'
//         liEl2.textContent = 'gallery'
//         liEl3.textContent = 'contact'

//         ulEL.appendChild(liEl1);
//         ulEL.appendChild(liEl2);
//         ulEL.appendChild(liEl3);
//     }

//     navEL.appendChild(ulEL)
// }