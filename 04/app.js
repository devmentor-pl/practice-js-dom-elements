console.log('DOM');
// metoda 1 
// const ul = document.createElement('ul')
// const liFirst = document.createElement('li')
// const liSecond = document.createElement('li')
// const liThird = document.createElement('li')
// const aFirst = document.createElement('a')
// const aSecond = document.createElement('a')
// const aThird = document.createElement('a')


// aFirst.href = "/"
// aFirst.textContent = 'start'

// aSecond.href = "/gallery"
// aSecond.textContent = "galeria"

// aThird.href = "/contact"
// aThird.textContent = "kontakt"

// liFirst.appendChild(aFirst)
// liSecond.appendChild(aSecond)
// liThird.appendChild(aThird)

// ul.appendChild(liFirst)
// ul.appendChild(liSecond)
// ul.appendChild(liThird)

// const navCreate = document.querySelector('nav')
// navCreate.appendChild(ul);





// dodanie elementu nav
const navElement = document.createElement('nav')

// dodanie elementu ul 
const ulElement = document.createElement('ul')


// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

// tworzenie pętli 

menuItems.forEach(elements => {
    const liElement = document.createElement('li')
    const a = document.createElement('a')

    a.textContent =  elements.text
    a.href = elements.url

    liElement.appendChild(a)
    ulElement.appendChild(liElement)

})

navElement.appendChild(ulElement);
document.body.appendChild(navElement);


