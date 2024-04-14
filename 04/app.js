console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const parentElement = document.querySelector('nav');
console.log(parentElement);
const newList = document.createElement('ul');
parentElement.appendChild(newList);
for (let i=0;i<3;i++) {
    const newElement = document.createElement('li');
    newList.appendChild(newElement);
    const newLink = document.createElement('a');
    switch(i) {
        case 0:
            newLink.innerText = 'start';
            newLink.setAttribute('href', '/');
            break;
        case 1:
            newLink.innerText = 'galeria';
            newLink.setAttribute('href', '/gallery');
            break;
        case 2:
            newLink.innerText = 'kontakt';
            newLink.setAttribute('href', '/contact');
            break;
    }
    newElement.appendChild(newLink);
}