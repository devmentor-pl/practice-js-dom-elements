console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');

menuItems.forEach(el => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    if(!a.hasAttribute('href')) {
        a.setAttribute('href', `${el.url}`)
        a.innerText = `${el.text}`;
    }
    ul.appendChild(li);
    li.appendChild(a);    
})

if(nav) {
    nav.appendChild(ul);
}
console.log(nav);