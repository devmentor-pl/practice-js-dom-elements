console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const navElement = document.querySelector('nav');
const ulElement = document.createElement('ul');
const ulElement2 = document.createElement('ul');

const link1 = document.createElement('a');
link1.setAttribute('href', '/')
link1.textContent = 'start';

const link2 = document.createElement('a');
link2.setAttribute('href', '/gallery');
link2.textContent = 'galeria';

const link3 = document.createElement('a');
link3.setAttribute('href', '/contact');
link3.textContent = 'kontakt';

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.appendChild(link1)
li2.appendChild(link2)
li3.appendChild(link3)

ulElement.appendChild(li1);
ulElement.appendChild(li2);
ulElement.appendChild(li3);

navElement.appendChild(ulElement);
navElement.appendChild(ulElement2);

menuItems.forEach(menuItem => {
    const li = document.createElement('li')
    li.innerHTML = '<a href="' + menuItem.url + '">' + menuItem.text + '</a>'
    ulElement2.append(li);
})

