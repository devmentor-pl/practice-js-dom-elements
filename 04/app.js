console.log('DOM');

const navElement = document.querySelector('nav');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const ulElement = document.createElement('ul');
menuItems.forEach(function(el){
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);

    aElement.innerText = el.text;
    aElement.href = el.url;
});

if (navElement){
    navElement.appendChild(ulElement);
}