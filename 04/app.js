
console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

/*
const ul = document.createElement('ul');

const liStart = document.createElement('li');
ul.appendChild(liStart);

const startA = document.createElement('a');
startA.innerText = "Start";
startA.href = "/";
liStart.appendChild(startA);


const liGallery = document.createElement('li');
ul.appendChild(liGallery);

const galleryA = document.createElement('a');
galleryA.innerText = "Galeria";
galleryA.href = "/gallery";
liGallery.appendChild(galleryA);


const liContact = document.createElement('li');
ul.appendChild(liContact);

const contactA = document.createElement('a');
contactA.innerText = "Kontakt";
contactA.href = "/contact";
liContact.appendChild(contactA);
console.log(ul);

const nav = document.querySelector('nav');
nav.appendChild(ul);
*/


const ul = document.createElement('ul');

for(let menu of menuItems) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = menu.text;
    a.href = menu.url;
    li.appendChild(a);
    ul.appendChild(li);
}

const nav = document.querySelector('nav');
nav.appendChild(ul);
console.log(ul);
