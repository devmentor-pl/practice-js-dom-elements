console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// const ulSpace = document.querySelector('nav');
// const ulElement = document.createElement('ul');
// const liElement = document.createElement('li');
// const liElementGallery = document.createElement('li');
// const liElementContact = document.createElement('li');
// const aElement = document.createElement('a');
// const aElementGallery = document.createElement('a');
// const aElementContact = document.createElement('a');
// aElement.setAttribute('href', '/');
// aElementGallery.setAttribute('href', '/gallery');
// aElementContact.setAttribute('href', '/contact');
// aElement.textContent = 'Start';
// aElementGallery.textContent = 'Gallery';
// aElementContact.textContent = 'Contact';
// liElement.appendChild(aElement);
// liElementGallery.appendChild(aElementGallery);
// liElementContact.appendChild(aElementContact);
// ulElement.appendChild(liElement);
// ulElement.appendChild(liElementGallery);
// ulElement.appendChild(liElementContact);
// ulSpace.appendChild(ulElement);


const ulSpace = document.querySelector('nav');  //.nav -klasa, [nav]- atrybut
const ulElement = document.createElement('ul');
console.log(menuItems)

menuItems.forEach(element => {
    console.log(element.text);
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.setAttribute('href', element.url);
    aElement.textContent = element.text;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
});

ulSpace.appendChild(ulElement);

console.log(ulSpace);