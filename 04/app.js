console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const htmlNavHook = document.getElementsByTagName('nav');
const uList = document.createElement('ul');

menuItems.forEach(item => {
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.textContent = item.text;
    aEl.href = item.url;
    liEl.appendChild(aEl);
    uList.appendChild(liEl);
});
htmlNavHook[0].appendChild(uList);