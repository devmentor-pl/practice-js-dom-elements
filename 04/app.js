console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];


const ulElement = document.createElement('ul');
const parentNav = document.querySelector('nav')
if (parentNav) {
    const ulElement = document.createElement('ul');
    const liElement = document.createElement('li');
    const liElement2 = liElement.cloneNode(true)
    const liElement3 = liElement.cloneNode(true)
    const aElement = document.createElement('a');
    aElement.setAttribute('href', '/')
    aElement.textContent = 'start';




    const aElement2 = aElement.cloneNode(true)
    aElement2.setAttribute(
        'href',
        '/gallery'
    )
    aElement2.innerText = 'gallery'

    const aElement3 = aElement.cloneNode(true)
    aElement3.setAttribute(
        'href',
        '/contact'
    )
    aElement3.innerText = 'contact'
    parentNav.appendChild(ulElement)
    ulElement.appendChild(liElement)
    ulElement.appendChild(liElement2)
    ulElement.appendChild(liElement3)
    liElement.appendChild(aElement)
    liElement2.appendChild(aElement2)
    liElement3.appendChild(aElement3)



}