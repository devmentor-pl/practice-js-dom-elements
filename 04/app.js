console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const parentElement = document.querySelector('nav');
const newList = document.createElement('ul');
newList.innerText = 'list stworzona bez użycia menuItems';
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

const newMenuList = document.createElement('ul');
newMenuList.innerText = 'lista stworzona z użyciem menuItems';
parentElement.appendChild(newMenuList);
menuItems.forEach(function(element){
    const newElement = document.createElement('li');
    newMenuList.appendChild(newElement);
    const newLink = document.createElement('a');
    newLink.innerText = element.text;
    newLink.setAttribute('href',element.url);
    newElement.appendChild(newLink);
})