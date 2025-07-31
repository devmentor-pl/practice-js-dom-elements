console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ulElements = document.createElement('ul');
if (nav) {
    nav.appendChild(ulElements);
    for (let i = 0; i < menuItems.length; i++) {
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');
        ulElements.appendChild(liElement);
        liElement.appendChild(aElement);
    }
}

const aElementList = document.querySelectorAll('a');

aElementList.forEach(function (element, index) {
    element.setAttribute('href', menuItems[index]['url']);
    element.textContent = menuItems[index]['text'];
})