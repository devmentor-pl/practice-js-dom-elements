console.log('DOM');




// 1 - bez wykorzystaina tablicy i forEach

const navMenu = document.querySelector('nav');
const ulMenu = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = 'home';
ulMenu.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'gallery';
ulMenu.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'contact';
ulMenu.appendChild(li3);

navMenu.appendChild(ulMenu);

// 2 - z wykorzystaniem tablicy i forEach


const navMenuFor = document.querySelector('nav');
const ulMenuFor = document.createElement('ul');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


menuItems.forEach(menuValue =>{ // uzycie "item" moze byc wykorzystywane przez innych programistów wiec tutaj będę zmienał zawsze na własną
    const liFor = document.createElement('li');
    const aFor = document.createElement('a');
    aFor.textContent = menuValue.text;
    aFor.href = menuValue.url;
    liFor.appendChild(aFor);
    ulMenuFor.appendChild(liFor);
});

navMenuFor.appendChild(ulMenuFor);