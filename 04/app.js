console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');
const ulElement = document.createElement('ul');
// bez struktury

// for(let i = 0; i < 3; i++) {
    // const liElement = document.createElement('li');
    // const linkElement = document.createElement('a');
//     switch(i) {
//         case 0:
//             addTextAndHrefAttribute(linkElement, 'href', '/', "start");
//             break;
//         case 1:
//             addTextAndHrefAttribute(linkElement, 'href', '/gallery', "galeria");
//             break;
//         case 2:
//             addTextAndHrefAttribute(linkElement, 'href', '/contact', "kontakt");
//     }
//     liElement.appendChild(linkElement);
//     ulElement.appendChild(liElement);
// }
// navElement.appendChild(ulElement);


// z wykorzystaniem struktury:

menuItems.forEach(function(object) {
    const liElement = document.createElement('li');
    const linkElement = document.createElement('a');
    addTextAndHrefAttribute(linkElement, 'href', object.url, object.text);
    liElement.appendChild(linkElement);
    ulElement.appendChild(liElement);
});
navElement.appendChild(ulElement);


function addTextAndHrefAttribute(el, attr, attrValue, text) {
    el.setAttribute(attr, attrValue);
    el.textContent = text;
}

