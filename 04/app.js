console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];


// const navEl = document.querySelector('nav')

// if (navEl) {
//     const newUl = document.createElement('ul');
//     navEl.appendChild(newUl)

//     if (newUl) {
//         const firstLi = document.createElement('li');
//         newUl.appendChild(firstLi)
//         firstLi.innerHTML = '<li><a href="/">home</a></li>';

//         const secondLi = document.createElement('li');
//         newUl.appendChild(secondLi)
//         secondLi.innerHTML = '<li><a href="/gallery">gallery</a></li>'

//         const thirdLi = document.createElement('li');
//         newUl.appendChild(thirdLi)
//         thirdLi.innerHTML = '<li><a href="/contact">contact</a></li>'

//     }

// }


const navEl = document.querySelector('nav');
const ulEl = document.createElement('ul')
navEl.appendChild(ulEl);

menuItems.forEach(items => {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    const aEl = document.createElement('a')
    liEl.appendChild(aEl);
    aEl.innerText = items.text;
    aEl.setAttribute('href', items.url)
})




