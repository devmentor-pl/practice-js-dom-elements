console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navEl = document.querySelector('nav');
const ulEl = document.createElement('ul');
for(let i = 0; i < 3; i++) {
    const liEl = document.createElement('li');
    const anchorEl = document.createElement('a');
    anchorEl.innerText = menuItems[i].text;
    anchorEl.setAttribute('href', menuItems[i].url);
    liEl.appendChild(anchorEl);
    ulEl.appendChild(liEl);
}

navEl.appendChild(ulEl);