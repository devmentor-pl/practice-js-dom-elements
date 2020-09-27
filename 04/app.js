console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];
//wersja bez wykorzystania struktury
const menuItem = document.querySelector('nav');
const ulItem1 = document.createElement('ul');

for (let i=1; i<=3; i++){
    const liItem = document.createElement('li');
    const aItem = document.createElement('a');

    switch (i) {
        case 1:
            aItem.setAttribute('href', '/');
            aItem.innerText = 'start';
            break;
        case 2:
            aItem.setAttribute('href', '/gallery');
            aItem.innerText = 'galeria';
            break;
        case 3:
            aItem.setAttribute('href', '/contact');
            aItem.innerText = 'kontakt';
            break;
    }
    liItem.appendChild(aItem);
    ulItem1.appendChild(liItem);
}
if(menuItem) {
    menuItem.appendChild(ulItem1);
}

//wersja z wykorzystaniem struktury
const ulItem2 = document.createElement('ul');

menuItems.forEach(function(element) {
    const liItem = document.createElement('li');
    const aItem = document.createElement('a');

    aItem.innerText = element['text'];
    aItem.setAttribute('href', element['url']);
    liItem.appendChild(aItem);
    ulItem2.appendChild(liItem);    
})
if(menuItem) {
    menuItem.appendChild(ulItem2);
}