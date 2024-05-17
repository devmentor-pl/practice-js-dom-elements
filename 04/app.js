console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const ulElement = document.createElement('ul');

for(let i=0; i<3; i++) {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
}

const liChildren = ulElement.children
liChildren[0].firstChild.textContent = 'start';
liChildren[0].firstChild.href = '/';

liChildren[1].firstChild.textContent = 'galeria';
liChildren[1].firstChild.href = '/gallery';

liChildren[2].firstChild.textContent = 'kontakt';
liChildren[2].firstChild.href = '/contact';

const navElement = document.querySelector('nav')
if(navElement) {
    navElement.appendChild(ulElement);
}

// forEach

const ulElement2 = document.createElement('ul');

menuItems.forEach(function(item) {
    const liElement2 = document.createElement('li')
    const aElement2 = document.createElement('a')

    aElement2.textContent = item.text;
    aElement2.href = item.url;

    liElement2.appendChild(aElement2);
    ulElement2.appendChild(liElement2);
})

const navElement2 = document.querySelector('nav')
if(navElement2) {
    navElement2.appendChild(ulElement2);
}