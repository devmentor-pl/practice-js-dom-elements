console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

// Second solution

const ulElement = document.createElement('ul')
const navElement = document.querySelector('nav')
navElement.appendChild(ulElement)

menuItems.forEach(item => {

    const element = document.createElement('li');
    const link = document.createElement('a');

    element.appendChild(link)
    link.innerText = item.text;
    link.setAttribute('href', item.url)

    navElement.appendChild(element)

})




// First solution

// const ulElement = document.createElement('ul')
// const navElement = document.querySelector('nav')
// navElement.appendChild(ulElement)
// const linksArray = [];

// for (let i = 0; i < 3; i++) {
//     const element = document.createElement('li');
//     const link = document.createElement('a');
//     linksArray.push(link)
//     element.appendChild(link)
//     ulElement.appendChild(element)
// }

// linksArray[0].innerText = 'start'
// linksArray[0].setAttribute('href', '/')

// linksArray[1].innerText = 'galeria'
// linksArray[1].setAttribute('href', '/gallery')

// linksArray[2].innerText = 'kontakt'
// linksArray[2].setAttribute('href', '/contact')

