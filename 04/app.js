// ROZWIĄZANIE NR 1 - BEZ WYKORZYSTANIA TABLICY OBIEKTÓW
const navEl = document.querySelector('nav');

if (navEl) {
    const ulEl = document.createElement('ul');
    const menuItNames = ['start', 'galeria', 'kontakt']
    const menuANames = ['/ ', '/gallery', '/contact']


    const liList = childrenList('li', menuItNames.length);

    for (item of liList) {
        const child = document.createElement('a');
        item.appendChild(child);
    }
    for (let i = 0; i < menuItNames.length; i++) {
        liList[i].querySelector('a').setAttribute('href', menuANames[i]);
        liList[i].querySelector('a').innerText = menuItNames[i]
    }

    addChildren(ulEl, liList);
    navEl.appendChild(ulEl)
}

// ROZWIĄZANIE NR 2 Z WYKORZYSTANIEM TABLICY OBIEKTÓW
// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

if (navEl) {
    const ulEl = document.createElement('ul');
const liList = [];

menuItems.forEach(item => {
    let liEl = document.createElement('li')
    let aEl = document.createElement('a');
    aEl.setAttribute('href', item.url);
    aEl.innerText = item.text;
    liEl.appendChild(aEl);
    liList.push(liEl)
})

addChildren(ulEl, liList);
    navEl.appendChild(ulEl)
}

function childrenList(item, amount) {
    let arr = [];
    for (let i = 0; i < amount; i++) {
        arr.push(document.createElement(item));
    }
    return arr
}

function addChildren(parent, children) {
    for (child of children) {
        parent.appendChild(child)
    }
}