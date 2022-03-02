console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navigation = document.querySelector('nav');

/*if(navigation) {
    const newUlElement = document.createElement('ul');
    navigation.appendChild(newUlElement);
    const newLiElement = document.createElement('li');
    newUlElement.appendChild(newLiElement);*/
    
    /*const cloneLi = newLiElement.cloneNode(true);
    newUlElement.appendChild(cloneLi);*/
    
    /*const newLi1Element = document.createElement('li');
    newUlElement.appendChild(newLi1Element);
    const newLi2Element = document.createElement('li');
    newUlElement.appendChild(newLi2Element);
    const newAElement = document.createElement('a');
    newLiElement.appendChild(newAElement);
    newAElement.setAttribute('href', '/');
    newAElement.innerText = 'start';
    const newA1Element = document.createElement('a');
    newLi1Element.appendChild(newA1Element);
    newA1Element.setAttribute('href', '/gallery');
    newA1Element.innerText = 'galeria';
    const newA2Element = document.createElement('a');
    newLi2Element.appendChild(newA2Element);
    newA2Element.setAttribute('href', '/contact');
    newA2Element.innerText = 'kontakt';
}*/

if(navigation) {
    const newUlElement = document.createElement('ul');
    navigation.appendChild(newUlElement);

    for(let i = 0; i < menuItems.length; i++) {
        const newLiElement = document.createElement('li');
        newUlElement.appendChild(newLiElement);
        const newAElement = document.createElement('a');
        newLiElement.appendChild(newAElement);
        newAElement.setAttribute('href', menuItems[i].url);
        newAElement.innerText = menuItems[i].text;
    }
}


