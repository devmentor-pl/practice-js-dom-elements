console.log('DOM');


// const navList = document.querySelector('nav');

// const newUl = document.createElement('ul');
// const newLi = document.createElement('li');
// const newA = document.createElement('a');

// newLi.appendChild(newA);
// newUl.appendChild(newLi);
// navList.appendChild(newUl);

// newA.innerText = 'start';
// newA.setAttribute('href', '/');

// const newLi1 = newLi.cloneNode(true);
// const newA1 = newLi1.querySelector('a');
// newA1.innerText = 'gallery';
// newA1.href = '/gallery';
// newUl.appendChild(newLi1);

// const newLi2 = newLi1.cloneNode(true);
// const newA2 = newLi2.querySelector('a');
// newA2.innerText = 'contact';
// newA2.href = '/contact';
// newUl.appendChild(newLi2);



const navList = document.querySelector('nav');

// struktura do wykorzystania w pętli

const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const newUl = document.createElement('ul');
navList.appendChild(newUl)
menuItems.forEach(function (item) {
    const newLi = document.createElement('li');
    const newA = document.createElement('a');

    newUl.appendChild(newLi)
    newLi.appendChild(newA)

    newA.innerText = item.text;
    newA.href = item.url;


});



