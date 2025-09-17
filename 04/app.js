console.log('DOM');

// Metod 1

// const ul = document.createElement('ul')
// const li1 = document.createElement('li')
// const a1 = document.createElement('a')
// a1.href = '/';
// a1.innerText = 'start';

// li1.appendChild(a1)


// const li2 = document.createElement('li')
// const a2 = document.createElement('a')
// a2.href = '/gallery';
// a2.innerText = 'gallery';

// li2.appendChild(a2)


// const li3 = document.createElement('li')
// const a3 = document.createElement('a')
// a3.href = '/contact';
// a3.innerText = 'contact';

// li3.appendChild(a3)

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// document.querySelector('nav').appendChild(ul)

// Metod 2
// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


const ul = document.createElement('ul')

menuItems.forEach(function(item){
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.href = item.url
    a.innerText = item.text

    li.appendChild(a)
    ul.appendChild(li)
})

document.querySelector('nav').appendChild(ul)
