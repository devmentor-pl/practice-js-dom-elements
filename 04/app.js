console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
console.log(nav);
const newUl = document.createElement('ul');

nav.appendChild(newUl);


for (let i=0; i<menuItems.length; i++) {

    const newLi = document.createElement('li');
    newUl.appendChild(newLi);

    const newA = document.createElement('a');
    newLi.appendChild(newA);

    console.log(newA);

    newA.innerText = menuItems[i].text;
    newA.setAttribute('href',menuItems[i].url);
}

console.log(menuItems[0].text);


