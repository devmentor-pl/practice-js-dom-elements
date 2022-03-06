console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav');

if(navElement) {
    const newMenu = document.createElement('ul');
    navElement.appendChild(newMenu);

    menuItems.forEach(function(element) {
        const newItem = document.createElement('li');
        newMenu.appendChild(newItem);
        newItem.innerHTML = '<a href="'+ element.url + '">' + element.text + '</a>';
    })
}


// const navElement = document.querySelector('nav');

// if(navElement) {
//     const newMenu = document.createElement('ul');
//     navElement.appendChild(newMenu);
//     if(newMenu) {
//         const newItem = document.createElement('li');
//         const cloneItem = newItem.cloneNode();
//         const cloneItem2 = newItem.cloneNode();
//         newMenu.appendChild(newItem);
//         newMenu.appendChild(cloneItem);
//         newMenu.appendChild(cloneItem2);

//             const newLink = document.createElement('a');
//             newLink.innerText = 'start';
//             newLink.setAttribute('href', '/');
//             newItem.appendChild(newLink);

//             const cloneLink = document.createElement('a');
//             cloneLink.innerText = 'galeria';
//             cloneLink.setAttribute('href', '/gallery');
//             cloneItem.appendChild(cloneLink);

//             const cloneLink2 = document.createElement('a');
//             cloneLink2.innerText = 'contact';
//             cloneLink2.setAttribute('href', '/contact');
//             cloneItem2.appendChild(cloneLink2);
//     }
// }