console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const unordList = document.createElement('ul');
// const listElem = document.createElement('li')
// const aElement = document.createElement('a');

nav.appendChild(unordList);
// unordList.appendChild(listElem);
// listElem.appendChild(aElement);

// aElement.setAttribute('href', '/');
// aElement.textContent = 'start';

// const listElem2 = listElem.cloneNode(true);
// const aElement2 = listElem2.querySelector('a');

// aElement2.setAttribute('href', '/gallery');
// aElement2.textContent = 'gallery';

// unordList.appendChild(listElem2);

// const listElem3 = listElem.cloneNode(true);
// const aElement3 = listElem3.querySelector('a');

// aElement3.setAttribute('href', '/contact');
// aElement3.textContent = 'contact';

// unordList.appendChild(listElem3);


menuItems.forEach(function(item){
    const listElem = document.createElement('li');
    const aElem = document.createElement('a');

    unordList.appendChild(listElem);
    listElem.appendChild(aElem);

    aElem.innerText = item.text;
    aElem.href = item.url;
})