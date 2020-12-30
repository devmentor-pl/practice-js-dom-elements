console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// const navMenu = [...document.getElementsByTagName('nav')];
//?dev sprawdź czemu to nie działa dla ??? : 
// const navMenu = document.getElementsByTagName('nav');
const navMenu = document.querySelector('nav');
console.log(navMenu);

const ulEl = document.createElement('ul');
menuItems.forEach(function(item){
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.setAttribute('href', item.url);
    aEl.textContent = item.text;
    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);

    console.log(ulEl)
});

navMenu.appendChild(ulEl);