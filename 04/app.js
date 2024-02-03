const parent = document.querySelector('nav')

if(parent){  
    const ul = document.createElement('ul')

    const liFirst = document.createElement('li')
    const liSecond = document.createElement('li')
    const liThrid = document.createElement('li')

    const anchorFirst = document.createElement('a')
    const anchorSecond = document.createElement('a')
    const anchorThrid = document.createElement('a')

    anchorFirst.setAttribute('href', '/')
    anchorSecond.setAttribute('href', '/gallery')
    anchorThrid.setAttribute('href', '/contact')

    anchorFirst.innerText = 'start'
    anchorSecond.innerText = 'galeria'
    anchorThrid.innerText = 'kontakt'

    liFirst.appendChild(anchorFirst)
    liSecond.appendChild(anchorSecond)
    liThrid.appendChild(anchorThrid)

    parent.appendChild(ul)
    ul.appendChild(liFirst)
    ul.appendChild(liSecond)
    ul.appendChild(liThrid)
}

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const menu = document.querySelector('nav')
const menuList = document.createElement('ul')

menu.appendChild(menuList)

if(menu){
    menuItems.forEach(function(menuItem) {
        const li = document.createElement('li')
        const a = document.createElement('a')

        a.textContent = menuItem.text;
        a.setAttribute('href', menuItem.url);


        li.appendChild(a);
        menu.appendChild(li);
    })
}