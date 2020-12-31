console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// Sposob 1. 
const nav = document.querySelector('nav');

if(nav) {
    const linkList = document.createElement('ul');
    const numberOfLink = 3;

    for(let i = 1; i <= numberOfLink; i++) {
        const linkItem = document.createElement('li');
        const link = document.createElement('a');

        switch (i) {
            case 1:
                link.textContent = 'start';
                link.setAttribute('href', '/');
                break;
            case 2: 
                link.textContent = 'galeria';
                link.setAttribute('href', '/gallery');
                break;
            case 3:
                link.textContent = 'kontakt';
                link.setAttribute('href', '/contact');
            default:
                break;
        }

        linkList.appendChild(linkItem);
        linkItem.appendChild(link);
    }
    
    nav.appendChild(linkList);
}


// Sposob 2. 
const navigation = document.querySelector('nav');

if(navigation) {
    const list = document.createElement('ul');
    
    menuItems.forEach((element, index) => {
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');

        list.appendChild(listItem);
        listItem.appendChild(itemLink);

        itemLink.setAttribute('href', menuItems[index]['url']);
        itemLink.textContent = menuItems[index]['text'];
    });

    navigation.appendChild(list);
}