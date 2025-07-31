console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {
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

const ulList = document.createElement('ul')
menuItems.forEach(item => {
    newLi = document.createElement('li')
    newA = document.createElement('a')
    newA.innerText = item.text
    newA.setAttribute('href',item.url)
    
    newLi.appendChild(newA)
    ulList.appendChild(newLi)
    
})
const nav = document.querySelector('nav')
nav.appendChild(ulList)