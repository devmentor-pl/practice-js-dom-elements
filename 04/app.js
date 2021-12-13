console.log('DOM');

const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
    {text: 'o nas', url: '/about'},
];

//WERJA PIERWSZA//

// const nav = document.querySelector('nav');
// const UlElement = document.createElement('ul');
// nav.appendChild(UlElement);
// const firstLi = document.createElement('li');
// const firstA = document.createElement('a');
// firstA.textContent = "start";
// firstLi.appendChild(firstA);
// firstA.setAttribute('href', '/')
// UlElement.appendChild(firstLi);
// const secondLi = firstLi.cloneNode(true);
// secondLi.firstChild.textContent = "galeria";
// secondLi.firstChild.setAttribute('href', '/gallery');
// UlElement.appendChild(secondLi);
// const lastLi = firstLi.cloneNode(true);
// lastLi.firstChild.textContent = "kontakt";
// lastLi.firstChild.setAttribute('href', '/contact');
// UlElement.appendChild(lastLi);

//WERJA DRUGA//

const nav = document.querySelector('nav');
const UlElement = document.createElement('ul');
nav.appendChild(UlElement);

menuItems.forEach(function() {
    let liEl = document.createElement('li');
    let aEl = document.createElement('a');
    liEl.appendChild(aEl);
    UlElement.appendChild(liEl);
});


const aElements  = document.querySelectorAll('a');
const urlItems = menuItems.map(a => a.url);
aElements.forEach(function(element, index) { 
    element.setAttribute('href', urlItems[index]);
    });
const textItems = menuItems.map(a => a.text);
aElements.forEach(function(element, index) { 
    element.textContent = textItems[index];
});






    
