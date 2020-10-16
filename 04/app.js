console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [{
        text: 'start',
        url: '/'
    },
    {
        text: 'galeria',
        url: '/gallery'
    },
    {
        text: 'kontakt',
        url: '/contact'
    },
];

const menuContainer = document.querySelector('nav');
const menu = document.createElement('ul');

//I sposób
menu.innerHTML = `<li><a href="/">home</a></li>
<li><a href="/gallery">gallery</a></li>
<li><a href="/contact">contact</a></li>`

//Skorzystałem z template string (czasem jestem leniwy), jeśli to bardzo niepoprawnie, to proszę o komentarz i poprawię

menuContainer.appendChild(menu);



//II sposób
const newMenu = document.createElement('ul');
menuItems.forEach(function (element) {

    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');

    for (const elItem in element) {

        if (elItem === 'text') {
            linkItem.textContent = element[elItem];
        } else if (elItem === 'url') {
            linkItem.setAttribute('href', element[elItem])
        }
    }

    listItem.appendChild(linkItem);
    newMenu.appendChild(listItem);
})

menuContainer.appendChild(newMenu);