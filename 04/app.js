console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

// First solution
const linksList = document.createElement('ul')
const navElement = document.querySelector('nav')
navElement.appendChild(linksList)
const linksArray = [];

for (let i = 0; i < 3; i++) {
    const element = document.createElement('li');
    const link = document.createElement('a');
    linksArray.push(link)
    element.appendChild(link)
    linksList.appendChild(element)
}

linksArray[0].innerText = 'start'
linksArray[0].setAttribute('href', '/')

linksArray[1].innerText = 'galeria'
linksArray[1].setAttribute('href', '/gallery')

linksArray[2].innerText = 'kontakt'
linksArray[2].setAttribute('href', '/contact')




// Second solution