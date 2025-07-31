console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


const navElement = document.querySelector('nav');
if(navElement) {
    const ulElement = document.createElement('ul');
if(ulElement) {
    menuItems.forEach( function(item) {
        const liElement = document.createElement('li')
        const linkElement = document.createElement('a')
        linkElement.setAttribute('href', item.url)
        linkElement.innerText = item.text
        liElement.appendChild(linkElement)
        ulElement.appendChild(liElement)

    } )
    
    
    // for(let key in menuItems) {
    //     const liElement = document.createElement('li')
    //     const linkElement = document.createElement('a')
    //     linkElement.setAttribute('href', menuItems[key].url)
    //     linkElement.innerText = menuItems[key].text
    //     liElement.appendChild(linkElement)
    //     ulElement.appendChild(liElement)
    
    // }
}

    navElement.appendChild(ulElement)
}

