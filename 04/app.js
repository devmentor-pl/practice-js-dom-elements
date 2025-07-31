console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navEl = document.querySelector('nav');
const ulEl = document.createElement('ul')
navEl.appendChild(ulEl);

menuItems.forEach(items => {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    const aEl = document.createElement('a')
    liEl.appendChild(aEl);
    aEl.innerText = items.text;
    aEl.setAttribute('href', items.url)
})
